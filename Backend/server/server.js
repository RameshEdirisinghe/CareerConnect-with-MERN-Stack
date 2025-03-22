import express from 'express';
import { auth } from 'express-openid-connect';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './db/connect.js';
import fs from 'fs';
import User from './models/userModel.js';
dotenv.config();

const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true
    }

));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(auth(config));

// app.get('/hi', (req, res) => {
//   res.send('Hello World!');
// }
// );
// const ensuerUserInDb = asyncHandler(async (user) => {
//   try{
//     const userExist = await User.findOne({auth_id: user.sub});
//   }catch(err){
//     console.error("Error: ", err.message);
//   }
// })

const  routeFiles = fs.readdirSync('./routes');
routeFiles.forEach((file) => {
  import(`./routes/${file}`).then((route) => {
    app.use("/api/user",route.default);
  }).catch((err) => {
    console.error("Error: ", err.message);
  });
});
const server = async () => {
  try{
    await connectDB();
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }catch(err){
    console.error("server error",err.message);
    process.exit(1);
  }
};

server();