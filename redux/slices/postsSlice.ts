import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = [
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
        addPosts: (state, action: PayloadAction<any>) => {
            const { id, title, description } = action.payload;
            state.push({
                id,
                title,
                description,
            });
        },
        deletePosts: (state, action: PayloadAction<any>) => {
            const postId = action.payload;
            return state.filter((post: any) => {
                post.id === postId
            });
        }
    }
})

export const { addPosts, deletePosts } = postsSlice.actions;
export default postsSlice.reducer;