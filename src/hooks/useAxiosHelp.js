import { axiosConfig } from "../helpers/axiosConfig";

const postAuthenticateUser = (enpoint, credentials) => {
  return axiosConfig.post(`${enpoint}/`, credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getTasks = (enpoint) => {
  return axiosConfig.get(`api/${enpoint}`, {
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
  return axiosConfig.delete(`${enpoint}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// const putDoc = (enpoint, data) => {
//   return axiosConfig.put(`${enpoint}?id=${data._id}`, data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

export { postAuthenticateUser, getTasks, postTask, deleteTask };
