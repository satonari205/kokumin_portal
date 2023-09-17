import axios from 'axios';

const ENDPOINT_URL = 'http://127.0.0.1:8000/api/v1/accounts/'

const userApi = {
    async getUser(user_id){
        const user = await axios
        .get(ENDPOINT_URL,{
            params:{
                id: user_id,
            },
        });
        return user.data;
    },
    async login(username,password){
        const user = await axios
        .get(ENDPOINT_URL,{
            params:{
                username: username,
                password: password,
            },
        });
        return user.data;
    },
    async register(username,nickname,password){
        const newUser = await axios
        .post(ENDPOINT_URL,{
            params:{
                username: username,
                nickname: nickname,
                password: password,
            }
        });
        return newUser.data;
    },
}

export default userApi;