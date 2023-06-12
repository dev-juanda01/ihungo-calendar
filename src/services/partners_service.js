import { axiosConfig } from "../helpers/axiosConfig";

const getActivesPartner = (enpoint) => {
  return axiosConfig.get(enpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { getActivesPartner };
