import React from 'react';
import s from './Post.module.css';

const Post = (props) =>{

    return   (
        <div>
            <div className={s.avatar}>
                <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'/>
            </div>
            <div>
               <span>{props.id} {props.message}like</span>
                {props.likesCount}

           </div></div>


    );
}           
export default Post;