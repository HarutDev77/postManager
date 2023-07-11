import mainApi from "./axsiosConfig";

export const login = async (fetchData)=>{
    return await mainApi.post('http://localhost:5050/auth/login', fetchData)
}