export const register = (req, res) => {
  const { full_name, email, password, DOB } = req.body; // data from user
  let query = `INSERT INTO users (full_name, email, password, DOB) VALUES (?, ?, ?, ?)`; // statement ==> db
  db.execute(query, [full_name, email, password, DOB], (err, result) => {
    if (err) return console.log(err.message);
    return res.status(201).json({
      status: "success",
      message: "user registered successfully",
      result,
    });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  let query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.execute(query, [email, password], (err, result) => {
    if (err) return console.log(err.message);
    if (result.length == 0)
      return res
        .status(404)
        .json({ status: "fail", message: "user not found" });
    return res
      .status(200)
      .json({
        status: "success",
        message: "user logged in successfully",
        result,
      });
  });
};
