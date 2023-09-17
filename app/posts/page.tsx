'use client'

import { useSelector, useDispatch } from "react-redux";
import { addPosts, deletePosts } from "@/redux/slices/postsSlice";
import styles from './page.module.css';
import { useState } from "react";

import React from 'react'

const Posts = () => {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();
    const posts = useSelector((state: any) => {
        state.posts
    })

    return (
        <div>Posts</div>
    )
}

export default Posts