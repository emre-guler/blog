import { Response, Request } from "express";
const User = require("./../models/userModel");

exports.getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

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
