import { createSlice } from '@reduxjs/toolkit';

export interface PostState {
    id: number,
    title: string,
    description: string,
}

const initialState: PostState[] = [
    {
        id: 1,
        title: "Post 1",
        description: "Description 1"
    }
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) => {
            const { id, title, description } = action.payload;
            state.push({
                id,
                title,
                description,
            });
        },
        deletePosts: (state, action) => {
            const postId = action.payload;
            return state.filter((post) => {
                post.id === postId
            });
        }
    }
})

export const { addPosts, deletePosts } = postsSlice.actions;
export default postsSlice.reducer;