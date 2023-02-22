import axios from "axios"

const URL = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1"
});

export const dataProducts = async () => {
    const res = await URL.get("/products")
    return res.data
}