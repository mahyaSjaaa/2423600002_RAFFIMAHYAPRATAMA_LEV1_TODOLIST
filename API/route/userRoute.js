import express from "express";
import {
  getAllUserData,
  createUser,
  getUsrById,
  updateUser,
  deleteUser,
} from "../controller/usercontrol.js";
import {
  getAllTaskData,
  createTask,
  getTskById,
  getTskByNrp,
  updateStatt,
  updateTask,
  deleteTask,
} from "../controller/taskcontrol.js";

const route = express.Router();

route.get("/get", getAllUserData);
route.get("/get/:id", getUsrById);
route.post("/add", createUser);
route.patch("/upd/:id", updateUser);
route.delete("/del/:id", deleteUser);

route.get("/getTask", getAllTaskData);
route.get("/getTask/:id", getTskById);
route.get("/getTaskNrp/:nrp", getTskByNrp);
route.post("/addTask", createTask);
route.patch("/updStat/:id", updateStatt);
route.patch("/updTask/:id", updateTask);
route.delete("/delTask/:id", deleteTask);

export default route;
