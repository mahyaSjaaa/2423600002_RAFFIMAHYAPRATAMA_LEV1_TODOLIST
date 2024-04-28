import {
  getAllUser,
  addUser,
  getUserById,
  updtUser,
  delUser,
} from "../model/usermodel.js";

export const getAllUserData = async (req, res) => {
  try {
    const data = await getAllUser();
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const createUser = async (req, res) => {
  const { username, nrp } = req.body;
  try {
    await addUser(username, nrp);
    res.status(201).json({ msg: "ok" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getUsrById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await getUserById(id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { username, nrp } = req.body;
  try {
    const data = await getUserById(id);
    console.log(data);
    const oldUsername = data[0].username;
    const oldNrp = data[0].nrp;

    if (username == "") {
      await updtUser(id, oldUsername, nrp);
    } else if (nrp == "") {
      await updtUser(id, username, oldNrp);
    } else {
      await updtUser(id, username, nrp);
    }
    res.status(200).json({ msg: "ok" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await delUser(id);
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
