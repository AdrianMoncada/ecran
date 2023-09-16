{{BASEURL}} = https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com

CREATE USER:
POST -> {{BASEURL}}/users/signup
EXAMPLE BODY: {
    "firstName": "Adrian",
    "lastName": "Moncada",
    "password": "12345678",
    "email": "amoncada@arcolab.com"
}

TOKEN: NOT REQUIRED
---

LOG IN USER:
POST -> {{BASEURL}}/users/login
EXAMPLE BODY: {
    "email": "amoncada@arcolab.com",
    "password": "12345678"
}

LOG IN SUCCESS RESPONSE 200 OK. JWT HEADERS.TOKEN

TOKEN: NOT REQUIRED
---

GET USER INFO:
GET ->  {{BASEURL}}/users/{UserId}
        {{BASEURL}}/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0

ADD MOVIE TO WATCHLIST:
POST -> {{BASEURL}}/users/{UserId}/watchlist
        {{BASEURL}}/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0/watchlist
EXAMPLE BODY: {
    "movieId": "64e4d1b9daf2a2c7f2f2d205"
}

CREATED 200 OK

---

GET MOVIES IN USER WATCHLIST:
GET ->  {{BASEURL}}/users/{UserId}/watchlist
        {{BASEURL}}/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0/watchlist

---

POST RATING IN MOVIE
POST -> {{BASEURL}}/users/{UserId}/addrating
        {{BASEURL}}/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0/addrating
EXAMPLE BODY: {
  "movieId": "64f96ccd80c4b45b53924c27",
  "rating": 5
}

---

POST COMMENT IN MOVIE
POST -> {{BASEURL}}/users/{UserId}/addcomment
        {{BASEURL}}/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0/addcomment
EXAMPLE BODY: {
    "movie": "64e4d1b9daf2a2c7f2f2d202",
    "comment": "Detalle de comentario..."
}

---

GET COMMENTS BY MOVIE ID
GET -> {{BASEURL}}/users/{{movieId}}/comments
       {{BASEURL}}/users/64e4d1b9daf2a2c7f2f2d1f7/comments

---

POST AVATAR

POST -> {{BASEURL}}/users/{{userId}}/image

        {{BASEURL}}/users/d6c8b8d8-75da-4e7a-bef7-b7f2830b0aa0/image

EXAMPLE BODY: {
        "file": "profilePicture.jpeg"
}

Response 200 OK LINK TO IMAGE, EXAMPLE: https://ecran.s3.amazonaws.com/Usuarios/profile_picture.jpeg
