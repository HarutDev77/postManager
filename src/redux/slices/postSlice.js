import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deletePost, getPosts} from "../../api/posts.api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts",async ()=>{
    const res = await getPosts()
    return res.data
});

export const removePost = createAsyncThunk('posts/removePost',async (id,{dispatch})=>{
    const res = await deletePost(id)
    if(res.data){
        dispatch(deletePostFromRedux(id))
    }
    return res?.data
});

const initialState = {
    list: [],
    status:'',
    deleteStatus: ''
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.list = [...state.list, ...action.payload]
        },
        deletePostFromRedux: (state, action) => {
            state.list = state.list.filter(post => post.id !== action.payload)
        },
        setPosts: (state,action)=>{
            state.list = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchPosts.pending,(state)=>{
                state.status = 'loading'
        })
            .addCase(fetchPosts.fulfilled,(state,action)=>{
                state.status = 'success'
                state.list = action.payload
            })
            .addCase(fetchPosts.rejected, (state)=>{
                state.status = 'error'
                state.isError = true
            })
            .addCase(removePost.pending, (state)=>{
                state.deleteStatus = "loading"
            })
            .addCase(removePost.fulfilled,(state,action)=>{
                state.deleteStatus = "success"
                state.list = state.list.filter(post => post.id !== action.payload)
            })
            .addCase(removePost.rejected,(state)=>{
                state.deleteStatus = 'error'
                state.isError = true
            })

    }

})

export const {addPost, deletePostFromRedux, setPosts} = postSlice.actions;
export const getPostsFromRedux = (state) => state.posts;
export default postSlice.reducer;