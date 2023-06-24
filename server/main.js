const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const JWT_SECRET = "dbsuweugbeubgeb()basjjabfbbfwfbfubjuwrebvsjbeuvbjbfb";

const mongoUrl =
  "mongodb+srv://mihikasaxena13:B2A8LdywkFnyHGxh@cluster0.lenkbk9.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("users");

// code for new user
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.end({ status: "error" });
  }
});

// code for login
app.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;

  // if user does not exist
  // checking if E-mail exists
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("Provided Password:", password);
    console.log("Stored Hashed Password:", user.password);
    console.log("Password Match:", passwordMatch);


    if (passwordMatch) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET);

      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "Invalid password" });
    }
  } catch (error) {
    return res.json({ error: "An error occurred" });
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
