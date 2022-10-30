import Axios from "axios";

export const defaultURL = "http://13.209.65.103:3200/api";
export const frontURL = "http://localhost:3000";

export const postToken = (data: any) => {
  return Axios.post(`${defaultURL}/erc20/reward`, data);
};
