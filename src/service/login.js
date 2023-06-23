import axiosInstance from "./axiosSetup";

const login = ({userName, password}) => 
    new Promise((resolve, reject) => {
        const reqObj = {name: userName, password};
        axiosInstance.post('/signin', reqObj)
            .then(res => {
                const {user, token} = res.data;
                resolve({user, token});
            })
            .catch(error => reject(error.response.data.error));
    });

export default login;