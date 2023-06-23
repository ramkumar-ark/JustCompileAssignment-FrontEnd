import axiosInstance from "./axiosSetup";
import header from "./createAuthHeader";

const addNote = (name, note) => 
    new Promise((resolve, reject) => {
        axiosInstance.post('/addnewnote', {name, note}, {headers: header()})
            .then(res => resolve(res.data.result))
            .catch(error => reject(error.response?.data?.message || 'Unknown Error Occured!'));
    });

export default addNote;
