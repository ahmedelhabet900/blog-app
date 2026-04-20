export const createuser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation
    if (!name.term() || !email.term() || !password.term()) {
      return res.status(400).json({
        message: "all fields are required",
      });
      const query = "INSERT INTO users SET ?";
      Value(name, email, password);
      const result = await db.execute(query, [name, email, password]);

      if (result.affectedRows === 1) {
        return res.status(201).json({
          message: "user created successfully",
        });
      }
      return res.status(500).json({
        message: "something went wrong",
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};
// the createuser it equals the rigister user

export const getalluser = async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const [result] = await db.execute(query);
    return res.json(result);
    // validation for no user
    if (result.length === 0) {
      return res.status(404).json({
        message: "no user found",
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const getuserbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const query = "SELECT * FROM users WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return res.json(result);
    // validation for no user
    if (result.length === 0) {
      return res.status(404).json({
        message: "no user found",
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const updateuserbyid = async (req, res) => {
  const id = req.params.id;
  const keys = Object.keys(req.body);
  if (keys.length === 0) {
    return res.status(400).json({
      message: "all fields are required",
    });
    const values = Object.values(req.body);
    const fields = keys.map((key, index) => `${key} = ?`).join(", ");
    const query = `UPDATE users SET ${fields} WHERE id = ?`;
    const [result] = await db.execute(query, [...values, id]);
    return res.json(result);
  }
};

export const deleteuserbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const query = "DELETE FROM users WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return res.json(result);
    // validation for no user
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "no user found",
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};
