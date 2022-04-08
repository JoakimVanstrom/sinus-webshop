import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export function saveToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export async function login(email, password) {
  return await axios.post("/auth", { email, password });
}

export async function logout() {
  return await axios.delete("/auth");
}

export async function getMyInfo() {
  return await axios.get("/me");
}

export async function getProducts() {
  return await axios.get("/items");
}
export async function upload(formData){
    return await axios.post('/images', formData)
}
export async function registerUser(email,password,name,city,street,zip){
  return await axios.post('/register', {email,password,name,address:{city,street,zip}})
}

let page = 2;


//fetch product pages
export async function getProductsPage() {// $COMMENT: Just add a page parameter
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


//Order functions
export async function createOrder(payload) {
  return await axios.post("/orders", payload);
}
export async function getOrders() {
  return await axios.get("/orders");
}
