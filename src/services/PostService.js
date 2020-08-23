import https from "../network";

const getAll = () => {
  return https.get("/posts");
};

const get = (id) => {
  return https.get(`/posts/${id}`);
};

const create = (data) => {
  return https.post("/posts", data);
};

const update = (id, data) => {
  return https.put(`/posts/${id}`, data);
};

const remove = (id) => {
  return https.delete(`/posts/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
