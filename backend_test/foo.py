import numpy 
dictionary={
  "Chief complaint": 1,
  "Nature of Pain": 1,
  "Severity of pain": 0,
  "Onset  and mode of pain": 2,
  "Factors which worsens the pain": 4,
  "Is the swelling painful?": 0,
  "Has the swelling changed since it was first noticed? If yes how quickly?": 0,
  "Does the swelling changes during normal activities such as eating, speaking, etc?": 0,
  "Is the ulcer painful": 0,
  "Is there bleeding from the ulcer": 0,
  "Is there discharge from the ulcer?": 0,
  "Is there a foul smell from the ulcer?": 0,
  "Do the ulcers interfere with daily activities": 0,
  "Has the ulcer changed since first noticed?": 0,
  "Have you had similar ulcers?": 0,
  "Is there bleeding in the gums?": 0,
  "Is there pain in the gums": 0,
  "If any tooth/teeth is/are mobile, what is the degree of mobility": 3
}
keys = dictionary.keys()
key_list=list(keys) 
print(key_list)