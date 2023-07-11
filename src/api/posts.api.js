import mainApi from "./axsiosConfig";

export const getPosts  = async ()=>{
    return await mainApi.get('http://localhost:5050/posts')
}
export const deletePost = async (id)=>{
    return await mainApi.delete(`http://localhost:5050/posts/${id}`)
}
export const createPosts = async (fetchData)=>{
    return await mainApi.post('http://localhost:5050/posts', fetchData)
}