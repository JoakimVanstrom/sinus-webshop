import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export function saveToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export async function login(email, password) {
  return await axios.post("/auth", { email, password });
}
export async function getMyInfo() {
  return await axios.get("/me");
}

export async function getProducts() {
  return await axios.get("/items");
}

let page = 2;

export async function getProductsPage() {
  return await axios.get(`/items?page=${page}`);
}
export async function getProductsPage3() {
  return await axios.get(`/items?page=3`);
}
export async function getProductsPage4() {
  return await axios.get(`/items?page=4`);
}
export async function getProductsPage5() {
  return await axios.get(`/items?page=5`);
}
