export const createblog = async (req, res) => {
  try {
    const { title, body, user_id } = req.body;
    let query = `SELECT * FROM users WHERE id = ?`;
    db.execute(query, [user_id], (err, result) => {
      if (err) return console.log(err.message);
      if (result.length == 0)
        return res
          .status(404)
          .json({ status: "fail", message: "user not found" });
      let query2 = `INSERT INTO blogs (title,body,user_id) VALUES (?,?,?)`;
      db.execute(query2, [title, body, user_id], (err, result) => {
        if (err) return console.log(err.message);
        return res.status(200).json({
          status: "success",
          message: "blog created successfully",
          result,
        });
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getallblog = async (req, res) => {
  try {
    const query = `SELECT * FROM blogs`;
    db.execute(query, (err, result) => {
      if (err) return console.log(err.message);
      return res.status(200).json({ status: "success", result });
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const getblogbyid = async (req, res) => {
  try {
    const { blog_id } = req.params;
    const query = `SELECT * FROM blogs WHERE id = ?`;
    db.execute(query, [blog_id], (err, result) => {
      if (err) return console.log(err.message);
      if (result.length == 0)
        return res
          .status(404)
          .json({ status: "fail", message: "blog not found" });
      return res.status(200).json({ status: "success", result });
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateblog = (req, res) => {
  try {
    const { blog_id } = req.params;
    const { title, body, user_id } = req.body;
    db.execute(query, [user_id], (err, result) => {
      if (err) return console.log(err.message);
      if (result.length == 0)
        return res
          .status(404)
          .json({ status: "fail", message: "user not found" });
      let query2 = `UPDATE blogs SET title = ?, body = ? WHERE id = ? AND user_id = ?`;
      db.execute(query2, [title, body, blog_id, user_id], (err, result) => {
        if (err) return console.log(err.message);
        if (result.affectedRows == 0)
          return res
            .status(404)
            .json({ status: "fail", message: "blog not found" });
        return res.status(200).json({
          status: "success",
          message: "blog updated successfully",
          result,
        });
      });
    });
    let query = `SELECT * FROM users WHERE id = ?`;
  } catch (err) {
    console.log(err.message);
  }
};
