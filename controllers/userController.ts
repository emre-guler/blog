import { toUSVString } from "util";

const User=require("./../models/userModel");

exports.getAllUsers = async (req, res) => {
  try{
    const users=await User.find();
    res.status(200).json({
  status:"success",
  result:users.length,
  data:{
    users
  }
  });
  }
  catch(err){
    res.status(404).json({
      status:"fail",
      message:err
    })
  }
  };

// exports.getUser = (req, res) => {
//   console.log(req.params);

//   const id = req.params.id * 1;
//   const User = Users.find((el) => el.id === id);

//   //  if (id > Users.length) {

//   if (!User) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       User,
//     },
//   });
// };

// exports.create = (req, res) => {
//   let salt = crypto.randomBytes(16).toString("base64");
//   let hash = crypto
//     .createHmac("sha512", salt)
//     .update(req.body.password)
//     .digest("base64");
//   req.body.password = salt + "$" + hash;
//   req.body.permissionLevel = 1;
//   UserModel.createUser(req.body).then((result) => {
//     res.status(201).send({ id: result._id });
//   });
// };

// exports.updateUser = (req, res) => {
//   const id = req.params.id * 1;

//   if (id > Users.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       User: "<Updated User here...></Updated>",
//     },
//   });
// };

// exports.deleteUser = (req, res) => {
//   const id = req.params.id * 1;

//   if (id > Users.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }
//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// };
