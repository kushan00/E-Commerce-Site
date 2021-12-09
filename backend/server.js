import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const PORT = 8000;
const DB_URL =
  "mongodb+srv://admin:admin@ecommerce.46tdl.mongodb.net/BuyGoods?retryWrites=true&w=majority";
mongoose
  .connect(DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

const electronicsSchema = new mongoose.Schema({
  itemName: {
    type: String,
    require: true,
  },
  brandName: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  unitPrice: {
    type: String,
    require: true,
  },
  shippingCost: {
    type: String,
    require: true,
  },
  quntityAvailable: {
    type: String,
    require: true,
  },
});

const electronics = mongoose.model("Electronic", electronicsSchema);

app.get("/retriveelectronics", (req, res) => {
  electronics
    .find()
    .then((electronics) => res.json(electronics))
    .catch((err) => res.status(400).json(`${err}`));
});

const furnituresSchema = new mongoose.Schema({
  fitemName: {
    type: String,
    require: true,
  },
  fbrandName: {
    type: String,
    require: true,
  },
  fcategory: {
    type: String,
    require: true,
  },
  funitPrice: {
    type: String,
    require: true,
  },
  fshippingCost: {
    type: String,
    require: true,
  },
  fquntityAvailable: {
    type: String,
    require: true,
  },
});

const furnitures = mongoose.model("furniture", furnituresSchema);

app.get("/retrivefurnitures", (req, res) => {
  furnitures
    .find()
    .then((furnitures) => res.json(furnitures))
    .catch((err) => res.status(400).json(`${err}`));
});

const AutopartsSchema = new mongoose.Schema({
  fitemName: {
    type: String,
    require: true,
  },
  fbrandName: {
    type: String,
    require: true,
  },
  fcategory: {
    type: String,
    require: true,
  },
  funitPrice: {
    type: String,
    require: true,
  },
  fshippingCost: {
    type: String,
    require: true,
  },
  fquntityAvailable: {
    type: String,
    require: true,
  },
});

const Autoparts = mongoose.model("autopart", AutopartsSchema);

app.get("/retriveAutoparts", (req, res) => {
  Autoparts.find()
    .then((Autoparts) => res.json(Autoparts))
    .catch((err) => res.status(400).json(`${err}`));
});

const GardenSchema = new mongoose.Schema({
  GitemName: {
    type: String,
    require: true,
  },
  GbrandName: {
    type: String,
    require: true,
  },
  Gcategory: {
    type: String,
    require: true,
  },
  GunitPrice: {
    type: String,
    require: true,
  },
  GshippingCost: {
    type: String,
    require: true,
  },
  GquntityAvailable: {
    type: String,
    require: true,
  },
});

const Garden = mongoose.model("Garden", GardenSchema);

app.get("/retriveGarden", (req, res) => {
  Garden.find()
    .then((Garden) => res.json(Garden))
    .catch((err) => res.status(400).json(`${err}`));
});

const FashionSchema = new mongoose.Schema({
  GitemName: {
    type: String,
    require: true,
  },
  GbrandName: {
    type: String,
    require: true,
  },
  Gcategory: {
    type: String,
    require: true,
  },
  GunitPrice: {
    type: String,
    require: true,
  },
  GshippingCost: {
    type: String,
    require: true,
  },
  GquntityAvailable: {
    type: String,
    require: true,
  },
});

const Fashion = mongoose.model("Fashion", FashionSchema);

app.get("/retriveFashion", (req, res) => {
  Fashion.find()
    .then((Fashion) => res.json(Fashion))
    .catch((err) => res.status(400).json(`${err}`));
});

const HouseSchema = new mongoose.Schema({
  HitemName: {
    type: String,
    require: true,
  },
  HbrandName: {
    type: String,
    require: true,
  },
  Hcategory: {
    type: String,
    require: true,
  },
  HunitPrice: {
    type: String,
    require: true,
  },
  HshippingCost: {
    type: String,
    require: true,
  },
  HquntityAvailable: {
    type: String,
    require: true,
  },
});

const House = mongoose.model("House", HouseSchema);

app.get("/retriveHouse", (req, res) => {
  House.find()
    .then((House) => res.json(House))
    .catch((err) => res.status(400).json(`${err}`));
});
