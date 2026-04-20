import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog_app",
});
db.connect((err) => {
  if (err) return console.log(err.massage);

  console.log("connected to database");
});
