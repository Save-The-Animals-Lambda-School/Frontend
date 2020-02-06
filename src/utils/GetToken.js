import axios from "axios";

export const GetToken = () => {
    const token = localStorage.getItem("token");
    
    return axios.create({
        baseURL: "https://save-the-animals-be.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    });
};