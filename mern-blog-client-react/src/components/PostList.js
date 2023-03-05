import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import Comments from './Comments';

const PostList = () => {

    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVICE_QUERY_URL}/posts`);
        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div 
                className='card mb-4 me-3' 
                style={{ width: '30%' }}
                key={post.id}
            >
                <div className='card-body'>
                    <h5 className='mb-2'>{post.title}</h5>
                    <CommentCreate postId={post.id} />
                    <Comments comments={post.comments} />
                </div>
            </div>
        )
    })

   return (
      <div className='d-flex flex-row flex-wrap'>
         { renderedPosts }
      </div>
   );
};

export default PostList;
