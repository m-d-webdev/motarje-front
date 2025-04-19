"use client";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

const PublicApi = axios.create({
    baseURL: url,
    withCredentials: true,
});


PublicApi.interceptors.response.use(

    (response) => {
        if (response.data.accessToken) {
            Cookies.set("accessToken", response.data.accessToken)
        }
        return response;
    },

    async (error) => {
        console.log(error);
        if ((error.response.status == "500")) {
            toast.error("Server error, please try again.");
        } else if ((error.response.status == "400")) {
            toast.error("A bad request was maded");
        }
        return Promise.reject(error)
    }
)


export default PublicApi;