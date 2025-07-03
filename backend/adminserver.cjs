const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const port = 6363;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/uploads" , express.static("uploads"));

mongoose.connect("mongodb://localhost:27017/zyptoadmin")
   .then(() => {console.log("MONGO DB Connected")})
   .catch((err)=> console.error(err));

const nftSchema = new mongoose.Schema({
    name : String,
    url : String,
    description: String,
    saleprice: Number,
    discount: Number
});

const nftModel = mongoose.model("nfts",nftSchema);

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


app.listen(port, (err) => {
    if (err) throw err;
     console.log(`Server is Running with ${port}`);
})