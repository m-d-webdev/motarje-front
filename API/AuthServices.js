import AuthedApi from "@/config/axios/NeedTokenApi";
import PublicApi from "@/config/axios/PublicApi";
import Cookies from "js-cookie";



export const LoginUser = (data) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                // Code

                const res = await PublicApi.post("/login", data);

                

                resolve({ ok: true, data: res.data });

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};



export const RegisterUser = (data) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                // Code

                const res = await PublicApi.post("/register", data);

                
                resolve({ ok: true, data: res.data });
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};


export const RefreshToken = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                // Code

                const res = await PublicApi.get("/refresh-token");
                if (res.status == 401) return reject({ ok: false, status: 401 });
                console.log(res);

                

                resolve({ ok: true, data: res.data });

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

export const Logout = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                // Code

                const res = await AuthedApi.get("/logout");
                Cookies.remove("accessToken");
                window.location.href = "/"

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};