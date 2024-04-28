import {
  getAllTask,
  addTask,
  getTaskById,
  getTaskByNrp,
  updModel,
  delTask,
} from "../model/taskmodel.js";
import { getUserByNrp } from "../model/usermodel.js";

export const getAllTaskData = async (req, res) => {
  try {
    const data = await getAllTask();
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const createTask = async (req, res) => {
  const { task, nrp } = req.body;
  const stat = "belum terselesaikan";

  try {
    const data = await getUserByNrp(nrp);
    if (data.length < 1)
      return res
        .status(400)
        .json({ msg: "user tidak ditemukan, masukkan nrp dengan benar" });
    await addTask(task, stat, nrp);
    res.status(201).json({ msg: "ok" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getTskById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await getTaskById(id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getTskByNrp = async (req, res) => {
  const nrp = req.params.nrp;
  console.log(nrp);
  console.log("ok");
  try {
    const data = await getTaskByNrp(nrp);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const updateStatt = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await getTaskById(id);
    const task = data[0].task;
    const nrp = data[0].nrp;
    const stat = data[0].status;
    let newStat;

    if (stat === "belum terselesaikan") {
      newStat = "terselesaikan";
      await updModel(id, task, newStat, nrp);
    } else if (stat === "terselesaikan") {
      newStat = "belum terselesaikan";
      await updModel(id, task, newStat, nrp);
    }
    res.status(200).json({ msg: "ok" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { newTask } = req.body;
  try {
    const data = await getTaskById(id);
    const nrp = data[0].nrp;
    const stat = data[0].status;

    await updModel(id, newTask, stat, nrp);
    res.status(200).json({ msg: "ok" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    await delTask(id);
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
