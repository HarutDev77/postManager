import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPosts,} from "../../../api/posts.api";
import { fetchPosts, getPostsFromRedux, removePost,} from "../../../redux/slices/postSlice";

import {Button, TextField, CircularProgress, Box, Typography} from "@mui/material";

import classes from "./home.module.scss";

const Home = () => {

    const [postTitle, setPostTitle] = useState("");
    const [postDescription, setPostDescription] = useState("");

    const dispatch = useDispatch();
    const {list,status} = useSelector(getPostsFromRedux);



    const handleSubmit = async (e) => {
        e.preventDefault()
        const fetchData = {
            title: postTitle, content: postDescription
        }
        try {
            const res = await createPosts(fetchData)

            if (res.data) {
                dispatch(fetchPosts())

            }
            setPostTitle("");
            setPostDescription("");

        } catch (e) {
            console.log(e)
            setPostTitle("");
            setPostDescription("");
        }

    }


    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    if (status==='loading') {
        return (
            <Box sx={{display: 'flex'}}>
                <CircularProgress/>
            </Box>
        )
    }

    return (<div>
        <h1>Home page</h1>
        <form onSubmit={handleSubmit}>
            <TextField
                id="standard-basic"
                className={classes.input}
                label="TITLE"
                variant="standard"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <TextField
                id="standard-basic"
                label="DESCRIPTION"
                variant="standard"
                value={postDescription}
                onChange={(e) => setPostDescription(e.target.value)}
            />
            <Button
                color="secondary"
                type="submit"
                variant="contained"
            >
                Add new post
            </Button>
        </form>
        {status === "success" ? list.map((post) => {
            return (<div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <button onClick={()=>dispatch(removePost(post.id))}>X</button>
            </div>)
        }) : null}
        {
            status === "error" && <Typography color={'error'}>Something want wrong </Typography>
        }
    </div>);
};

export default Home;