import requests

url = "https://klepio-backend-experimental.onrender.com/predict"  
headers = {"Content-Type": "application/json"} 
data = {
    "Chief_complaint": "1",
    "Nature_of_Pain": "4",
    "Severity_of_pain": "1",
    "Onset_and_mode_of_pain": "1",
    "Factors_which_worsens_the_pain": "3",
    "Is_the_swelling_painful": "0",
    "Has_the_swelling_changed_since_it_was_first_noticed": "0",
    "Does_the_swelling_changes_during_normal_activities": "0",
    "Is_the_ulcer_painful": "0",
    "Is_there_bleeding_from_the_ulcer": "0",
    "Is_there_discharge_from_the_ulcer": "0",
    "Is_there_a_foul_smell_from_the_ulcer": "0",
    "Do_the_ulcers_interfere_with_daily_activities": "0",
    "Has_the_ulcer_changed_since_first_noticed": "0",
    "Have_you_had_similar_ulcers": "0",
    "Is_there_bleeding_in_the_gums": "0",
    "Is_there_pain_in_the_gums": "0",
    "If_any_tooth_teeth_is_are_mobile_what_is_the_degree_of_mobility": "0"
}

try:
    # Sending a POST request with JSON data and headers
    response = requests.post(url, headers=headers, json=data)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        print("Request successful!")
        print("Response JSON:", response.json())
    else:
        print(f"Request failed with status code {response.status_code}")
        print("Response text:", response.text)

except requests.RequestException as e:
    print(f"Error during the request: {e}")
