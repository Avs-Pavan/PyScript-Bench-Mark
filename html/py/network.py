# importing the requests library
import requests;

from js import console
  
def getRecords(*args):
    console.log("started fetching records..")
    URL = "https://6304dc3c94b8c58fd726ccaf.mockapi.io/users"
    result = requests.get(url = URL)
    console.log(result.json())

