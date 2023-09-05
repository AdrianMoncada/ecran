BASE URL https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization

CREATE USER:
POST -> https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users
EXAMPLE BODY: {
    "firstName": "Adrian",
    "lastName": "Moncada",
    "password": "12345678",
    "email": "amoncada@arcolab.com"
}

---

LOG IN USER:
POST -> https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/login
EXAMPLE BODY: {
    "email": "amoncada@arcolab.com",
    "password": "12345678"
}

LOG IN SUCCESS RESPONSE 200 OK. JWT HEADERS.TOKEN

---

GET USER INFO:
GET ->  https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/{UserId}
        https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0

ADD MOVIE TO WATCHLIST:
POST -> https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/{UserId}/watchlist
        https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0/watchlist
EXAMPLE BODY: {
    "movieId": "64e4d1b9daf2a2c7f2f2d205"
}

CREATED 200 OK

---

GET MOVIES IN USER WATCHLIST:
GET ->  https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/{UserId}/watchlist
        https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0/watchlist
