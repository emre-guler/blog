import { Response, Request } from "express";
const UserService = require("./../services/userService");
const UserServiceInstance = new UserService();

exports.getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserServiceInstance.getUsers(req.body);
    res.set("Content-Type", "application/json");
    res.status(200).json({
      users,
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
    const user = await UserServiceInstance.getUserById(req.params.id);
    res.status(200).json({
      user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserServiceInstance.createUser(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserServiceInstance.updateUser(req.params.id, req.body);

    res.status(200).json({
      user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteUser = async (req: Request, res: Response) => {
  try {
    await UserServiceInstance.deleteUser(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
