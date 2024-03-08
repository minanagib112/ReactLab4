import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
const PostsContext = createContext();
export const PostsContextProvider =(props) => {
    let {children} = props;

    let [posts, setPosts]=useState(null);
    let getPosts =()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>setPosts(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=> {
        getPosts();
    },[])
    const contextValue = useMemo(()=>({posts}),[posts]);
    return (
        <PostsContext.Provider value={contextValue}>
        {children}
        </PostsContext.Provider>
    )

}
export default PostsContext;