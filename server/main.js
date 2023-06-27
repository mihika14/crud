const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

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

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    
    await User.create({
      fname,
      lname,
      email,
      password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// code for login
app.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ error: "User not found" });
  }

  if (password === user.password) {
    const token = jwt.sign({}, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
     
    } else {
      return res.json({ error: "error" });
    }
  }
  
  res.json({ status: "error", error: "invalid password" });
});

app.post('./userData' , async(req , res) => {
  const { token } = req.bidy;
  try{
const user = jwt.verify(token, JWT_SECRET)
const useremail = user.email;
User.findOne({email: useremail})
.then((data) => {
  res.json({status: 'ok' , data:'data'})
}).catch((error)=> {
  res.send({status:'error' , data:'error'})
});
  }catch(error){}
})


app.listen(5000, () => {
  console.log("server running on port 5000");
});
