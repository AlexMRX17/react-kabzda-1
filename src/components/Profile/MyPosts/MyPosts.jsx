import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {




    let postsElements = props.posts.map (p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button onClick={ ()=> (alert('Vayoming.net'))}>Tab here</button>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>

        </div>

    );
}
export default MyPosts;