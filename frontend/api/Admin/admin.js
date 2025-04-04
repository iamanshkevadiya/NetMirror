import { getToken } from "../../utils/Cookies.js";

console.log(getToken());

const baseUrl = "http://localhost:8090";
const AdminApi = {
    getAdmins: async () => {
        try {
            let req = await fetch(`${baseUrl}/user/all-admin`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });

            let res = await req.json();
            console.log(res);
            return res;
        } catch (error) { }
    },

};
export default AdminApi