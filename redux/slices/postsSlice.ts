import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PostState {
  id: number;
  title: string;
  description: string;
}

const initialState: PostState[] = [
  {
    id: 1,
    title: "Post 1",
    description: "Description 1",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<PostState[]>) => {
      state.push(...action.payload);
    },
    updatePost: (state, action: PayloadAction<PostState>) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post: PostState) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
      }
    },
    addPost: (state, action: PayloadAction<PostState>) => {
      const { id, title, description } = action.payload;
      state.push({
        id,
        title,
        description,
      });
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      return state.filter((post: PostState) => { return post.id !== postId });
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
