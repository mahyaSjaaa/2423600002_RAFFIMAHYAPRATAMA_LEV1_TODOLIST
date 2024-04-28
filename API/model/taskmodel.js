import koneksi from "../dbconfig/dbconfig.js";

export const getAllTask = () => {
  const query = koneksi.select("*").from("task");

  return query;
};

export const addTask = (task, stat, nrp) => {
  const query = koneksi
    .insert({ task: task, status: stat, nrp: nrp })
    .into("task");

  return query;
};

export const getTaskById = (id) => {
  const query = koneksi.select("*").from("task").where({ id: id });

  return query;
};

export const getTaskByNrp = (nrp) => {
  const query = koneksi.select("*").from("task").where({ nrp: nrp });

  return query;
};

export const updModel = (id, task, stat, nrp) => {
  const query = koneksi("task")
    .update({ task: task, status: stat, nrp: nrp })
    .where({ id: id });
  return query;
};

export const delTask = (id) => {
  const query = koneksi("task").del().where({ id: id });
  return query;
};
