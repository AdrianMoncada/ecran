BASE URL https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization

CREATE USER:
POST -> https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users
EXAMPLE BODY: {
    "firstName": "Adrian",
    "lastName": "Moncada",
    "password": "12345678",
    "email": "amoncada@arcolab.com"
}

LOG IN USER:
POST -> https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/login
EXAMPLE BODY: {
    "email": "amoncada@arcolab.com",
    "password": "12345678"
}

LOG IN SUCCESS RESPONSE 200 OK. JWT HEADERS.TOKEN



