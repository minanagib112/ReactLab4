import React, { useContext } from 'react';
import PostsContext from './ContextApis/PostsContext.jsx';

const Posts = () => {
    let {posts} =useContext(PostsContext)
    return (
        
            <div className="container">
                <h1>Posts</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts ? (
                            posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
};

export default Posts;