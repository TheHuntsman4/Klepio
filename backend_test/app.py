from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import pandas as pd
import numpy as np

app = FastAPI()

# Enable CORS for all routes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and encoder
model = pickle.load(open('DentAIv1.pkl', 'rb'))


class Item(BaseModel):
    Chief_complaint: float
    Nature_of_Pain: float
    Severity_of_pain: float
    Onset_and_mode_of_pain: float
    Factors_which_worsens_the_pain: float
    Is_the_swelling_painful: float
    Has_the_swelling_changed_since_it_was_first_noticed: float
    Does_the_swelling_changes_during_normal_activities: float
    Is_the_ulcer_painful: float
    Is_there_bleeding_from_the_ulcer: float
    Is_there_discharge_from_the_ulcer: float
    Is_there_a_foul_smell_from_the_ulcer: float
    Do_the_ulcers_interfere_with_daily_activities: float
    Has_the_ulcer_changed_since_first_noticed: float
    Have_you_had_similar_ulcers: float
    Is_there_bleeding_in_the_gums: float
    Is_there_pain_in_the_gums: float
    If_any_tooth_teeth_is_are_mobile_what_is_the_degree_of_mobility: float


@app.post("/predict")
async def predict(item: Item):
    # Convert input data to DataFrame
    input_data = pd.DataFrame(item.dict(), index=[0])

    # Convert DataFrame columns to numeric
    input_data = input_data.apply(pd.to_numeric, errors='coerce')

    # Fill NaN values with 0
    input_data = input_data.fillna(0)

    # Make predictions using the pre-trained model
    prediction = int(model.predict(input_data)[0])

    # Return result
    return {"prediction": prediction}


@app.options("/predict")
async def handle_options(request: Request):
    return {"message": "Options"}

