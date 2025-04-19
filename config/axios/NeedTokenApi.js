"use client";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;



const AuthedApi = axios.create({
    baseURL: url,
    withCredentials: true,
});


// ----
AuthedApi.interceptors.request.use(
    (config) => {
        const token = Cookies.get("accessToken");

        if (!token) {
            Promise.reject({ message: "no token need to loggin" });
            return window.location.href = "/login";
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }

)

AuthedApi.interceptors.response.use(

    (response) => {
        return response;
    },

    async (error) => {
        console.log(error);
        if (error.response.status == "401") {
            toast.error("The server rejected the request, trying again...")
            const AccesstokenRequest = await axios.get('/refresh-token', { withCredentials: true });
            if (AccesstokenRequest.data?.accessToken) {
                Cookies.set("accessToken", AccesstokenRequest.data?.accessToken);
                const originlRequesr = error.config;
                originlRequesr.headers.Authorization = `Bearer ${AccesstokenRequest.data?.accessToken}`
                return AuthedApi(originlRequesr);
            } else {

                toast.error("Error : need to login .")
                Cookies.remove("accessToken");
                return window.location.href = "/login";

            }
        } else if ((error.response.status == "500")) {
            toast.error("Server error, please try again.");
        } else if ((error.response.status == "400")) {
            toast.error("A bad request was maded");
        }
        return Promise.reject(error)
    }
)

export default AuthedApi;