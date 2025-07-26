const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const dotenv = require("dotenv");
const port = 6363;
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/uploads" , express.static("uploads"));

mongoose.connect(process.env.MONGO_DB)
   .then(() => {console.log("MONGO DB Connected")})
   .catch((err)=> console.error(err));

const nftSchema = new mongoose.Schema({
    name : String,
    url : String,
    description: String,
    saleprice: Number,
    discount: Number
});
const walletSchema = new mongoose.Schema({
    currencyName:"String",
    currencyCurrentPrice:Number,
    image:"String"
});
const nftModel = mongoose.model("adminnfts",nftSchema);
const walletmodel = mongoose.model("createcurrency", walletSchema);

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({storage});


app.post("/addnft", upload.single("url"), async (req, res) => {
  try {
    const { name, description, saleprice, discount } = req.body;

    
    const url = `http://localhost:${port}/uploads/${req.file.filename}`;

    const response = new nftModel({
      name,
      url,
      description,
      saleprice,
      discount
    });

    const result = await response.save();
   
    console.log(result)
    res.send(result);
  } catch (err) {
    console.error("Error saving NFT:", err);
    res.status(500).send({
      message: "Failed to upload NFT",
      error: err.message,
    });
  }
});
app.get("/getnft", async (req , res) => {
  const response = await nftModel.find();
  res.send(response);
})

app.post("/addcurrencytoWallet",upload.single("image"), async(req ,res)=>{
  const {currencyName ,currencyCurrentPrice} = req.body;
  const image = `http://localhost:${port}/uploads/${req.file.filename}`;
  const response =new walletmodel({currencyName:currencyName,currencyCurrentPrice:currencyCurrentPrice, image:image});
 const result = await response.save();
 res.send(result);
})

app.get("/getcurrencyDetail",async(req , res)=>{
  const result = await walletmodel.find();
  res.send(result);
})

app.listen(port, (err) => {
    if (err) throw err;
     console.log(`Server is Running with ${port}`);
})