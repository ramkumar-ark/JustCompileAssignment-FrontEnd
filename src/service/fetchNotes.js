import axiosInstance from "./axiosSetup";
import header from "./createAuthHeader";

const fetchNotes = (name) => 
    new Promise((resolve, reject) => {
        axiosInstance.get(`/getallnotes/${name.trim()}`, {headers: header()})
            .then(res => resolve(res.data.result))
            .catch(error => reject(error.response.data.message));
    });

export default fetchNotes;
