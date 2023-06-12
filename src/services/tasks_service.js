import { axiosConfig } from "../helpers/axiosConfig";

const getTasks = (enpoint) => {
  return axiosConfig.get(enpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const postTask = (enpoint, data) => {
  return axiosConfig.post(enpoint, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const deleteTask = (enpoint, id) => {
  return axiosConfig.delete(`${enpoint}${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { getTasks, postTask, deleteTask };
