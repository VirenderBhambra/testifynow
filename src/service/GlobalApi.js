import { updateSession } from "@auth0/nextjs-auth0";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MY_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

const createSpace = async (data) => {
  const res = await axiosClient.post("/api/test", data);
  return res.data;
};
const getSpaceById = async ()=>{
  const res = await axiosClient.get(`/api/test/id?id=${id}`);
  return res.data;
}
const getSpace = async ()=>{
    const res = await axiosClient.get("/api/test");
    return res.data;
}
const deleteSpace = async (id) => {
  const res = await axiosClient.delete(`/api/test?id=${id}`); // Pass ID as a query parameter
  return res.data;
}
const GlobalApi = {
    createSpace,getSpace,deleteSpace,getSpaceById,
}
export default GlobalApi;
