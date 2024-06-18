import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "social",
});

db.connect(function (err) {
  if (err) {
    console.log("unconnected to db");
  } else {
    console.log("Connected to db");
  }
});
