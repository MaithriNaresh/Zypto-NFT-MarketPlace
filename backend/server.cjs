const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const Razorpay = require("razorpay");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const authRoutes = require("./auth");
// const port = 5656;
const secretkey = "Zypto@123";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("MongoDB Connected");
});

// ==== Mongoose Schemas ====


const regShema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  image: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  istrader: {
    type: Boolean,
    default: false,
  },
  followers:{type:["String"],
    default:[]
  },
  following:{type:["String"],
    default:[]
  }
},
{
  timestamps: true
}
);

//nftSchema
const nftSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  saleprice: Number,
  discount: Number,
  collectionid: mongoose.Schema.Types.ObjectId,
  status: {
    type: String,
    enum: ["pending", "accept", "reject", "blocked"],
    default: "pending",
  },
  userid: String,
  auctionStatus: {
    type: String,
    enum: ["not_started", "started", "in-process","rejected"],
    default: "not_started",
  },
  auctionStartTime: Date,

 
});

//collection Schems
const collectionShema = new mongoose.Schema({
  name: String,
  image: String,
  userid: String,
  createddate: { type: Date, default: Date.now },
  status: {
    type: String,
    default: true,
  },
});
// Create Auction Schema
const auctionSchema = new mongoose.Schema({
  nftid: String,
  min_bid: Number,
  startDate: Date,
  endDate: Date,
  status: {
    type: String,
    enum: ["accept", "reject", "pending"],
    default: "pending",
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  bids:[
    {
      uid:String,
      bidamt:Number,
      biddate:{
        type: Date,
        default:Date.now
      }
    }
  ]
});

const traderSchema = new mongoose.Schema({
   uid: "String",
   bankdetails:{
     accountHolderName: "String",
    accountNumber: "String",
    ifscCode:"String",
    bankName: "String",
    branch:"String"
   },
   pancardNo:"String",
   adhaarNo:"String",
   idProof:"String",
   passportSizePhoto:"String",
   createDate:{
    type: Date,
    default: Date.now
   },
   request:{
    type: String,
    enum:["pending","accept", "reject"],
    default: "pending"
   }

});
  
const createCurrencySchema = new mongoose.Schema({
  currencyName : "String",
  amount: Number,
  uid:String,
  quantity: Number,
  currencyImageUrl: String,
  createDate: {
    type:Date,
    default:Date.now
  }
});


const userotpSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  phone: { type: String, required: true },
  name: { type: String, default: "Zypto User" },
});

const otpVerifyModel = mongoose.model("User", userotpSchema);

const userSignIn = mongoose.model("userRegister", regShema);
const collectionModel = mongoose.model("collections", collectionShema);

const nftModel = mongoose.model("nfts", nftSchema);
const auctionModel = mongoose.model("createauction", auctionSchema);
const traderModel = mongoose.model("bcomeatrader",traderSchema);
const createCurrencyModel = mongoose.model("buycurrency" , createCurrencySchema, "buycurrency");
// ==== Middleware to verify token ====

function verifyToken(req, res, next) {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "Token is missing" });
  }

  //  Remove "Bearer " if present
  if (token.startsWith("Bearer ")) {
    token = token.slice(7);
  }

  try {
    const decoded = jwt.verify(token, secretkey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid or expired token" });
  }
}

// ==== Multer Upload ====
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

// ==== Routes ====


app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const response = new userSignIn({ name, email, password });
  const result = await response.save();
  res.send(result);
})
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const response = await userSignIn.findOne({ email });

  if (!response) {
    return res.status(401).send({ message: "Invalid email" });
  }

  if(response.password !== password){
    return res.status(401).send({ message: "Invalid password" });
  }

  const payload = {
    id: response._id,
    email: response.email,
    name: response.name,
    image: response.image,
  };

  const token = jwt.sign(payload, secretkey, { expiresIn: "7d" });
  res.json({ token, response: payload });
});

app.get("/getuser", async (req, res) => {
  const response = await userSignIn.find();
  res.send(response);
});

app.get("/getuser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await userSignIn.findOne({ _id: id });
    if (!response) return res.status(404).send({ message: "User not found" });
    res.send(response);
  } catch (error) {
    res.status(500).send({ message: "Server error", error });
  }
});

// Upload NFT route — token protected
app.post("/addnft", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { name, description, saleprice, discount, collectionid, status } =
      req.body;
    const userid = req.user.id;

    const image = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;

    const response = new nftModel({
      name,
      image,
      description,
      saleprice,
      discount,
      collectionid,
      status,
      userid,
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

app.get("/getnft", async (req, res) => {
  try {
    const response = await nftModel.aggregate([
      {
        $lookup: {
          from: "collections", // collection name in MongoDB (usually lowercase + plural)
          localField: "collectionid", // field in nftModel
          foreignField: "_id", // field in collections
          as: "collectionData", // alias for the joined data
        },
      },
      {
        $unwind: "$collectionData", // optional: flatten the array if only one collection per NFT
      },
    ]);

    res.send(response);
  } catch (err) {
    console.error("Error in aggregation:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/updatestatus/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ["accept", "reject", "blocked"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const nft = await nftModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!nft) return res.status(404).json({ message: "NFT not found" });

    res.json(nft);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Assuming collectionid in nftModel refers to collections._id

app.get("/getnftbyid/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await nftModel.aggregate([
      {
        $match: {
          userid: id,
          // status: "accept"
        },
      },
      {
        $lookup: {
          from: "collections", // MongoDB collection name (lowercase plural)
          localField: "collectionid",
          foreignField: "_id",
          as: "collectionData",
        },
      },
       {
        $addFields: {
          useridObj: { $toObjectId: "$userid" },
        },
      },
     {
      $lookup:{
        from: "userregisters",
        localField: "useridObj",
        foreignField:"_id",
        as: "userData"
      }
     },
     {
  $unwind: {
    path: "$userData",
    preserveNullAndEmptyArrays: true
  }
}
    ]);

    res.send(response);
    // console.log(response);
  } catch (err) {
    console.error("Error fetching NFT data:", err);
    res.status(500).send("Error fetching NFT data");
  }
});

app.put("/updateuser/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const updateData = {};

  if (req.body.name) updateData.name = req.body.name;
  if (req.body.email) updateData.email = req.body.email;
  if (req.body.password) updateData.password = req.body.password;
  if (req.body.trader !== undefined) updateData.trader = req.body.trader;

  if (req.file) {
    updateData.image = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;
  }

  try {
    const response = await userSignIn.updateOne({ _id: id }, updateData);
    res.send(response);
  } catch (err) {
    res.status(500).send({ message: "Error updating user", error: err });
  }
});

app.put("/toggletrader/:id", async (req, res) => {
  const { id } = req.params;
  const { istrader } = req.body;

  try {
    const response = await userSignIn.updateOne(
      { _id: id },
      { istrader: istrader === "true" || istrader === true }
    );
    res.send(response);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error updating trader status", error: err });
  }
});

// Fix this line (was missing "/")
app.delete("/deletetrader/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userSignIn.deleteOne({ _id: id });
    res.send({ message: "User deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Error deleting user", error: err });
  }
});

// ==== Collection route =====
app.post("/addcollection", upload.single("image"), async (req, res) => {
  const { name, status, userid } = req.body;

  const image = `http://localhost:${process.env.PORT}/uploads/${req.file.filename}`;
  const response = new collectionModel({
    name,
    image,
    userid,
    status,
  });
  const result = await response.save();
  res.send(result);
});

app.get("/getcollection", async (req, res) => {
  const response = await collectionModel.find();
  res.send(response);
});
app.get("/getcollections/:userid", async (req, res) => {
  const userid = req.params.userid;
  const collection = await collectionModel.find({ userid: userid });
  res.send(collection);
});

app.get("/getnftbycollection/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await nftModel.aggregate([
      {
        $match: {
          collectionid: new mongoose.Types.ObjectId(id), // ensure it's an ObjectId
          // status: "accept"
        },
      },
      {
        $lookup: {
          from: "collections", // collection name in DB
          localField: "collectionid",
          foreignField: "_id",
          as: "collection",
        },
      },
    ]);
    res.json(response);
  } catch (err) {
    console.error("Aggregation error:", err);
    res.status(500).send("Server Error");
  }
});

app.get("/getcollectionwithnft", async (req, res) => {
  try {
    const collections = await collectionModel.aggregate([
      {
        $lookup: {
          from: "nfts",
          localField: "_id",
          foreignField: "collectionid",
          as: "nfts",
        },
      },
    ]);
    res.json(collections);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching collections");
  }
});

app.get("/getcollectionwithnft/:userid", async(req , res)=>{
  const {userid} = req.params;
  const collectionData = await collectionModel.aggregate([
      {$match:{userid:userid}},
      {
        $lookup:{
          from:"nfts",
          localField:"_id",
          foreignField:"collectionid",
          as: "nfts"
        }
      },

  ]);
  res.json(collectionData);
})
app.delete("/deletenft/:nftid", async (req, res) => {
  const { nftid } = req.params;
  const response = await nftModel.deleteOne({ _id: nftid });
  res.send(response);
});

// app.put("/startauction/:id", async (req, res) => {
//   try {
//     const nftId = req.params.id;
//     const { auctionStatus } = req.body;
//     const result = await nftModel.updateOne(
//       { _id: nftId },
//       { auctionStatus: auctionStatus }
//     );

//     if (!result) {
//       return res.status(404).json({ message: "NFT not found" });
//     }

//     res.json({ message: "Auction started", nft: result });
//   } catch (err) {
//     console.error("Error starting auction:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

app.post("/createAuction", async (req, res) => {
  const { nftid, min_bid, startDate, endDate } = req.body;
  const auction = new auctionModel({
    nftid,
    min_bid,
    startDate,
    endDate,
  });
  await auction.save();

  await nftModel.findByIdAndUpdate(nftid, {
    auctionStatus: "in-process",
  });
  res.status(201).json({
    message: "Auction Create Successfully And NFT Updated",
  });
});

app.get("/getAuctionsWithNft", async (req, res) => {
  try {
    const auctions = await auctionModel.aggregate([
      {
        $addFields: {
          nftidObj: { $toObjectId: "$nftid" },
        },
      },
      {
        $lookup: {
          from: "nfts",
          localField: "nftidObj",
          foreignField: "_id",
          as: "nftData",
        },
      },
      {
        $unwind: {
          path: "$nftData",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          nftUserIdObj: { $toObjectId: "$nftData.userid" },
        },
      },
      {
        $lookup: {
          from: "userregisters", // your users collection
          localField: "nftUserIdObj", // adjust this field
          foreignField: "_id",
          as: "userData",
        },
      },
      {
        $unwind: {
          path: "$userData",
          preserveNullAndEmptyArrays: true,
        },
      },
    
     
    ]);
    res.json(auctions);
  } catch (err) {
    console.error("Error fetching auctions:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/getAuctionsWithNft/:id", async (req, res) => {
  try {
    const nftId = req.params.id;

    const auction = await auctionModel.aggregate([
      {
        $match: {
          nftid: nftId,
        },
      },
      {
        $addFields: {
          nftidObj: {
            $toObjectId: "$nftid",
          },
        },
      },
      {
        $lookup: {
          from: "nfts",
          localField: "nftidObj",
          foreignField: "_id",
          as: "nftData",
        },
      },
      {
        $unwind: {
          path: "$nftData",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          nftUserIdObj: { $toObjectId: "$nftData.userid" },
        },
      },
      {
        $lookup: {
          from: "userregisters", // your users collection
          localField: "nftUserIdObj", // adjust this field
          foreignField: "_id",
          as: "userData",
        },
      },
      {
        $unwind: {
          path: "$userData",
          preserveNullAndEmptyArrays: true,
        },
      },
        {
        $addFields:{
          collectionIdObj:{ $toObjectId:"$nftData.collectionid"}
        }
      },
    {
      $lookup:{
        from:"collections",
        localField:"collectionIdObj",
        foreignField:"_id",
        as:"collectionData",
      }
    },
     {
        $unwind: {
          path: "$collectionData",
          preserveNullAndEmptyArrays: true,
        },
      },
     
    ]);

    if (auction.length === 0) {
      return res
        .status(404)
        .json({ message: "Auction not found for this NFT" });
    }
    res.json(auction[0]);
  } catch (err) {
    console.error("Error fetching auction:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/auctionStatus/:id", async (req, res) => {
  try {
    const { status , uid } = req.body;
    const { id } = req.params;

    // console.log("Received ID:", id);
    // console.log("Received Status:", status);

    const allowed = ["accept", "reject"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const auction = await auctionModel.findById(id);
    if (!auction) {
      return res.status(404).json({ message: "Auction not found" });
    }
    // const auctionUpdate = await auctionModel.updateOne({ _id: id }, { status });

     if (status === "accept") {
      if (!uid) {
        return res.status(400).json({ message: "User ID is required to place initial bid" });
      }

      auction.status = "accept";

      auction.bids.push({
        uid: uid,
        bidamt: auction.min_bid, // ✅ default first bid = min_bid
      });

      await auction.save();

      // Update NFT to reflect that auction has started
      await nftModel.updateOne(
        { _id: auction.nftid },
        { auctionStatus: "started" }
      );

      return res.json({ message: "Auction accepted and initial bid added", auction });
    }
    if(status === "reject"){
      auction.status = "reject";
      await auction.save();

     const response =   await nftModel.updateOne(
        { _id: auction.nftid },
        { auctionStatus: "reject" }
      );
      return res.json({ message: "Auction rejected and NFT updated" });
    }

    const result = await auctionModel.updateOne({ _id: id }, { status });
    res.json({ message: "Auction status updated", result });
  } catch (err) {
    console.error("Error updating auction status:", err);
    res.status(500).json({ message: "Server error" });
  }
});
app.put("/placeBid/:id", async (req, res) => {
  const { id } = req.params; // auction ID
  const { uid, bidamt } = req.body;

  try {
    const auction = await auctionModel.findById(id);
    if (!auction) return res.status(404).json({ message: "Auction not found" });

    const bids = auction.bids || [];
    const lastbid = bids.length > 0 ? bids && bids[bids.length-1]: null;
    if (bidamt <= lastbid.bidamt) {
      return res.status(400).json({ message: `Bid must be higher than ${lastbid.bidamt}` });
    }

    // Optional: Enforce time check
    const now = new Date();
    if (auction.endDate && now > auction.endDate) {
      return res.status(400).json({ message: "Auction has ended" });
    }

    // Add new bid
    auction.bids.push({ uid, bidamt });
    await auction.save();

    res.json({ message: "Bid placed successfully", auction });
  } catch (err) {
    console.error("Error placing bid:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/getbiddingnfts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const now = new Date();

    const response = await auctionModel.aggregate([
      {
        $match: {
          "bids.uid": id
        }
      },
      {
        $addFields: {
          nftObjectId: { $toObjectId: "$nftid" }
        }
      },
      {
        $lookup: {
          from: "nfts",
          localField: "nftObjectId",
          foreignField: "_id",
          as: "nftData"
        }
      },
      { $unwind: "$nftData" },

      {
        $lookup: {
          from: "collections",
          localField: "nftData.collectionid",
          foreignField: "_id",
          as: "collectionData"
        }
      },
      { $unwind: { path: "$collectionData", preserveNullAndEmptyArrays: true } },

      {
        $addFields: {
          userBids: {
            $filter: {
              input: "$bids",
              as: "bid",
              cond: { $eq: ["$$bid.uid", id] }
            }
          },
          lastBid: { $arrayElemAt: ["$bids", -1] }, // last overall bid
        }
      },
      {
        $addFields: {
          userLastBid: { $arrayElemAt: ["$userBids", -1] },
          isAuctionEnded: { $lt: ["$endDate", now] },
          isWinner: {
            $cond: [
              {
                $and: [
                  { $eq: ["$lastBid.uid", id] },
                  { $lt: ["$endDate", now] }
                ]
              },
              true,
              false
            ]
          }
        }
      },
      {
        $project: {
          nft: "$nftData",
          collection: "$collectionData",
          userBid: "$userLastBid.bidamt",
          bidDate: "$userLastBid.biddate",
          isAuctionEnded: 1,
          isWinner: 1,
          startDate: 1,
          endDate: 1,
          status: 1
        }
      }
    ]);

    res.send(response);
  } catch (error) {
    console.error("Error fetching bidding NFTs", error);
    res.status(500).send("Error fetching bidding NFTs");
  }
});
app.get("/getSingleBiddingNfts/:nftId", async(req, res)=>{
  const {nftId} = req.params;
  try {
    
    const response = await auctionModel.aggregate([
      {$match:{
            nftid :nftId
      }},
      {
        $addFields: {
          nftidObj: { $toObjectId: "$nftid" },
        },
      },
      {
        $lookup:{from:"nfts",
        localField:"nftidObj",
        foreignField:"_id",
        as:"nftData"
      }},
      {$unwind:{
        path:"$nftData",
        preserveNullAndEmptyArrays:true
      }},
      {
        $addFields:{
        userObjid:{ $toObjectId :"$nftData.userid"}
      }},
      {
        $lookup:{
        from:"userregisters",
        localField:"userObjid",
        foreignField:"_id",
        as:"userData"
      }},
      {
        $unwind:{
        path:"$userData",
        preserveNullAndEmptyArrays: true
      }},
      {$addFields: {
        collectionObjid:{
          $toObjectId: "$nftData.collectionid"
        }
      }},
      { $lookup: {
        from: "collections",
        localField:"collectionObjid",
        foreignField:"_id",
        as:"collectionData"
      }}
    ])

    res.send(response);
  } catch (error) {
    console.error("Error fetching bidding NFTs", error);
    res.status(500).send("Error fetching bidding NFTs");
  }
})

app.put("/transferNFTOwnerShip", async (req, res)=>{
  const {newownerId , nftid} = req.body;
    if (!nftid || !newownerId) {
    return res.status(400).json({ message: "Missing NFT or new owner ID" });
  }
   try{ 
    const update = await nftModel.findByIdAndUpdate(
      nftid,
      {$set:{
        userid: newownerId
      },
   },{
     new: true
   }
    );
      if (!update) {
      return res.status(404).json({ message: "NFT not found" });
    }
    res.json({message:"Nft Owner Updated", nft:update})
   }catch(err){
    console.error("Error updating NFT ownership:", err);
     res.status(500).json({ message: "Server error while updating NFT ownership" });
   }

})
// ==== Start Server ====
app.post("/create_order", async (req, res) => {
  const { amount } = req.body;
   const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "101",
    };
   try {
    const order = await razorpay.orders.create(options);
    res.send(order);
   } catch (error) {
    console.error(error)
   }
 

  
});



app.post("/trader",
  upload.fields([
    { name: "idProof", maxCount: 1 },
    { name: "passportSizePhoto", maxCount: 1 },
  ]),
  async (req, res) => {
    const {
    uid,
    accountHolderName,
    accountNumber,
    ifscCode,
    bankName,
    branch,
    pancardNo,
    adhaarNo,
  } = req.body;
  const idProof =  req.files?.idProof?.[0] &&
        `http://localhost:${process.env.PORT}/uploads/${req.files.idProof[0].filename}`;
  const passportSizePhoto =  req.files?.passportSizePhoto?.[0] &&
        `http://localhost:${process.env.PORT}/uploads/${req.files.passportSizePhoto[0].filename}`;      
  try{
  const newTrader = new traderModel({ uid,
    bankdetails: {
      accountHolderName,
      accountNumber,
      ifscCode,
      bankName,
      branch,},
     pancardNo: pancardNo,
    adhaarNo: adhaarNo,
    idProof: idProof,
    passportSizePhoto: passportSizePhoto,
    });
  const savetrader = await newTrader.save();
  console.log("Files : ",req.files)
  res.status(201).json({message:"Trader details saved successfully",date: savetrader});}
  catch(err){
    console.error("Error saving trader details");
    res.status(500).json({
      message:"Failed to save trader details",
      error: err.message
    })
  }

});

app.get("/gettrader", async(req , res)=>{
  const response = await traderModel.find();
  res.send(response);
});
app.get("/gettrader/:uid", async(req , res)=>{
   
    const { uid } = req.params; 
  //  console.log("Usr ID:" ,JSON.stringify(uid))
  const response = await traderModel.findOne({uid:uid , request : "pending"})
  // .sort({createDate: -1});

  res.send(response);
});
app.put("/acceptTrader/:id", async (req, res) => {
  const { request } = req.body;
  const { id } = req.params;

  console.log("Trader ID:", id);
  console.log("Incoming request status:", request);

  const updateTrader = await traderModel.findOneAndUpdate(
    { uid: id , request:"pending" },
    { $set: { request: request } },
    //  { sort: { createDate: -1 }, new: true }
  );

  let updateUser = null;
  if(request === "accept"){
      updateUser = await userSignIn.updateOne(
    { _id: id },
    { $set: { istrader: true } }
  );
    if (updateUser.matchedCount === 0) {
    return res.status(400).json({ message: "User not found" });
  }
  }
 



  res.json({
    message: `Trader ${request === "accept" ? "Accepted" : "Rejected"}`,
    user: updateUser
  });

  console.log("Trader Update Result:", updateTrader);
  console.log("User Update Result:", updateUser);
});


app.put("/follow/:id", async (req, res)=>{
    const id = req.params.id;
    const {currentUserid} = req.body;

    if(id === currentUserid){
     return res.status(403).json({message:"Action forbidden"});
    }else{
      try {
        const followUser = await userSignIn.findById(id);
        const followingUser = await userSignIn.findById(currentUserid);
  
        if(!followUser.followers?.includes(currentUserid)){
         await  followUser.updateOne({$push:{followers:currentUserid}});
         await followingUser.updateOne({$push:{following:id}});
        return res.status(200).json({message:"User followed!"});
        }
      } catch (error) {
        res.status(500).json(error)
      }
    }
});

app.put("/unfollow/:id", async (req, res)=>{

    const id = req.params.id;
    const {currentUserid} = req.body;

    if(id === currentUserid){
     return res.status(403).json({message:"Action forbidden"});
    }else{
      try {
        const followUser = await userSignIn.findById(id);
        const followingUser = await userSignIn.findById(currentUserid);
  
        if(followUser.followers?.includes(currentUserid)){
         await  followUser.updateOne({$pull:{followers:currentUserid}});
         await followingUser.updateOne({$pull:{following:id}});
        return res.status(200).json({message:"User Unfollowed!"});
        }else{
         return res.status(403).json({message:"User already followed by you"});
        }
      } catch (error) {
        res.status(500).json(error)
      }
    }
})

// Example backend route
app.get("/getfollowers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userSignIn.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const followers = await Promise.all(
      user.followers.map((followerId) => userSignIn.findById(followerId))
    );

    res.status(200).json(followers);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});
app.post("/buy_currency", async (req, res) => {
  const { amount , uid} = req.body;
  if(!uid){return res.status(401).json({message:"user Required"})};
  if(!amount || isNaN(amount)){return res.status(400).json({message:"Amount Invalid"})};
  try {
    const user = userSignIn.findById({uid})
    if(!user){return res.status(401).json({message:"invalid user"})}
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order)
  } catch (err) {
   console.log("Razorpay error" , err.error || err);
    return res.status(500).json({
      message: "Failed to create order",
      error: err?.error?.description || err.message,
    });
    
  }
   
   try {
    const order = await razorpay.orders.create(options);
    res.send(order);
   } catch (error) {
    console.error(error)
   }
 

  
});
app.post("/addcurrency", async(req , res)=>{
  const {currencyName , amount ,quantity, uid,currencyImageUrl} = req.body;

    try{
     const result = new createCurrencyModel({
    currencyName: currencyName,
    amount : amount,
    quantity: quantity,
    uid:uid,
    currencyImageUrl: currencyImageUrl
  });
   const savedCurrency = await result.save();
   res.status(200).json({
        message: "currency added successfully",       
        savedCurrency,
      });
  console.log(savedCurrency)
   
  }catch(err){
   console.error(err)
  }
  
})

app.get("/getWallet/:id", async (req , res)=>{
  const {id} = req.params;
  const response = await createCurrencyModel.find({uid:id});
  res.status(200).json(response);
})

app.post("/buyNft", async (req, res) => {
  const { nftId, buyerId, currencyName, amount } = req.body;

  try {
    const wallet = await walletModel.findOne({
      userid: buyerId,
      currencyName: currencyName,
    });

    if (!wallet || wallet.quantity < amount) {
      return res.status(400).send("Insufficient balance");
    }

    // Deduct currency
    wallet.quantity -= amount;
    await wallet.save();

    // Optional: mark NFT as sold
    await nftModel.findByIdAndUpdate(nftId, {
      owner: buyerId,
      status: "sold",
    });

    res.send("NFT purchased successfully");
  } catch (error) {
    console.error("Purchase error:", error);
    res.status(500).send("Error during NFT purchase");
  }
});
app.put("/deductcurrency/:id", async (req, res) => {
  const { amountToDeduct } = req.body;
  const walletId = req.params.id;

  try {
    const wallet = await createCurrencyModel.findById(walletId);

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    if (wallet.quantity < amountToDeduct) {
      return res.status(400).json({ message: "❌ Insufficient balance" });
    }

    wallet.quantity = parseFloat((wallet.quantity - amountToDeduct).toFixed(4));
    const updatedWallet = await wallet.save();

    res.status(200).json({
      success: true,
      message: "✅ Currency deducted successfully",
      updatedWallet,
    });
  } catch (err) {
    console.error(" Server Error:", err);
    res.status(500).json({ message: "❌ Server error", error: err.message });
  }
});
// routes/userRoutes.js
app.post("/verify_user", async (req, res) => {
  const { uid, phone } = req.body;

  try {
    let user = await otpVerifyModel.findOne({ uid });

    if (!user) {
      user = await otpVerifyModel.create({
        uid,
        phone,
        name: "Zypto User", // optional
      });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});


app
  .listen(process.env.PORT, () => {
    console.log("Server is Running on port " + process.env.PORT);
  })
  .on("error", (err) => console.error("Server error:", err));
