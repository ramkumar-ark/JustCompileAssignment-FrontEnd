import axiosInstance from "./axiosSetup";

const register = ({name, email, password}) => 
    new Promise((resolve, reject) => {
        const reqObj = {name, email, password};
        axiosInstance.post('/signup', reqObj)
            .then(res => {
                const {user, token} = res.data;
                resolve({user, token});
            })
            .catch(error => reject(error.response.data.error));
    });

export default register;