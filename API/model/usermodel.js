import koneksi from "../dbconfig/dbconfig.js";

export const getAllUser = () => {
  const query = koneksi.select("*").from("user");

  return query;
};

export const addUser = (username, nrp) => {
  const query = koneksi.insert({ username: username, nrp: nrp }).into("user");

  return query;
};

export const getUserById = (id) => {
  const query = koneksi.select("*").from("user").where({ id: id });

  return query;
};

export const getUserByNrp = (nrp) => {
  const query = koneksi.select("*").from("user").where({ nrp: nrp });

  return query;
};

export const updtUser = (id, username, nrp) => {
  const query = koneksi("user")
    .update({ username: username, nrp: nrp })
    .where({ id: id });

  return query;
};

export const delUser = (id) => {
  const query = koneksi("user").del().where({ id: id });
  return query;
};
