import { axiosConfig } from "../helpers/axiosConfig";

const postAuthenticateUser = (enpoint, credentials) => {
  return axiosConfig.post(`${enpoint}/`, credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// const postLogoutSessionUser = (enpoint, credentials) {}

const getTasks = (enpoint, token) => {
  return axiosConfig.get(`api/${enpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const getTasksToUser = (enpoint, token, user_id) => {
  return axiosConfig.get(`api/${enpoint}/user/${user_id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const postTask = (enpoint, token, data) => {
  return axiosConfig.post(`api/${enpoint}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteTask = (enpoint, token, id) => {
  return axiosConfig.delete(`api/${enpoint}/${id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

export { postAuthenticateUser, getTasks, getTasksToUser, postTask, deleteTask };
