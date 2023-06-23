import axiosInstance from "./axiosSetup";

const verifyAuth = (token) => 
    new Promise((resolve, reject) => {
        axiosInstance.post('/verify/secret', {token})
            .then(res => {
                res.data.status ? resolve() : reject();
            })
            .catch(error => {
                reject(error.response?.data?.error);
            });
    });

export default verifyAuth;