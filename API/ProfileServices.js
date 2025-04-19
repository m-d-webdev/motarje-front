import AuthedApi from "@/config/axios/NeedTokenApi";
import PublicApi from "@/config/axios/PublicApi";
import Cookies from "js-cookie";



export const UpdateProfileData = (data) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                // Code

                const res = await AuthedApi.put("/profile", data);
                resolve({ ok: true, data: res.data });

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

