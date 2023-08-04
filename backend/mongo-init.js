var db = connect("mongodb://admin:14292@127.0.0.1:27017/admin");

db =
  db.getSiblingDB(
    "series-dev-mongo"
  ); /* 'use' statement doesn't support here to switch db */

db.createUser({
  user: "user-series-mongo",
  pwd: "pwd-series-mongo",
  roles: [
    {
      role: "readWrite",
      db: "series-dev-mongo",
    },
  ],
});

db.createCollection("Series");

db.holiday.insert({
  serieId: 1,
  name: "F.R.I.E.N.D.S",
  genre: "comedy",
  seasons: [
    {
      seasonId: 1,
      seasonNumber: 1,
      chapters: [
        {
          chapterId: 1,
          name: 1,
          number: 1,
          urlStream: "https://netflix.com.ar",
        },
      ],
    },
  ],
});
