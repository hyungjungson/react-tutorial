import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const 게시물들 = createSlice({
  name: "posts",
  initialState: [
    {
      id: "1",
      title: "제목",
      content: "내용",
      author: "병수",
    },
    {
      id: "2",
      title: "제목2",
      content: "내용2",
      author: "병수2",
    },
    {
      id: "3",
      title: "제목3",
      content: "내용3",
      author: "병수3",
    },
  ],
  reducers: {
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    addPost: (state, action) => {
      state.push(action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const postIndex = state.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].content = content;
      }
    },
  },
});

const createForm = createSlice({
  name: "create",
  initialState: {
    title: "",
    content: "",
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateContent: (state, action) => {
      state.content = action.payload;
    },
    clearForm: (state) => {
      state.title = "";
      state.content = "";
    },
  },
});

export const { deletePost, addPost, updatePost } = 게시물들.actions;
export const { updateTitle, updateContent, clearForm } = createForm.actions;

const store = configureStore({
  reducer: {
    게시물들: 게시물들.reducer,
    create: createForm.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Routes, Route 태그 및 react-router-dom을 사용하기 위해선 최상단에 BrowserRouter로 감싸줘야한다 */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
