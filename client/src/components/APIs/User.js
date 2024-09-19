import values from "../../values";
import { callApi } from "./Configs/ApiConfig";

export async function getUsers({ currentPage, searchQuery }) {
  const data = await callApi({
    url: `${values.serverURL}/users?page=${currentPage}&query=${searchQuery}`,
    method: values.methods.GET,
  });
  return data;
}

export async function deleteUser({ id }) {
  const data = await callApi({
    url: `${values.serverURL}/users?id=${id}`,
    method: "DELETE",
  });
  return data;
}

export async function addUser({ formDataToSend }) {
  const data = await callApi({
    url: `${values.serverURL}/users`,
    method: "POST",
    body: formDataToSend,
  });
  return data;
}
