from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__)

# Load model and encoder
model = pickle.load(open('rf_model.pkl','rb')) 
encoder = pickle.load(open('encoder.pkl','rb'))

@app.route('/predict', methods=['POST'])
def predict():
    # Get data
    columns=['Chief complaint', 'Nature of Pain', 'Severity of pain', 'Onset  and mode of pain', 'Factors which worsens the pain', 'Is the swelling painful?', 'Has the swelling changed since it was first noticed? If yes how quickly?', 'Does the swelling changes during normal activities such as eating, speaking, etc?', 'Is the ulcer painful', 'Is there bleeding from the ulcer', 'Is there discharge from the ulcer?', 'Is there a foul smell from the ulcer?', 'Do the ulcers interfere with daily activities', 'Has the ulcer changed since first noticed?', 'Have you had similar ulcers?', 'Is there bleeding in the gums?', 'Is there pain in the gums', 'If any tooth/teeth is/are mobile, what is the degree of mobility']
    data = request.get_json() 
    data = {k: np.float32(v) for k, v in request.json.items()}
        
    print(data) 
    df = pd.DataFrame(data, columns=columns, index=[0])
    print(df)
    
    df = df.apply(pd.to_numeric, errors='coerce') 
    print(df) 
    
    pred = model.predict(df)
    print(pred)
    
    # Return result
    result = {'prediction': int(pred[0])} 
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)