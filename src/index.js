import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

let 게시물들 = createSlice({
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
  },
});

export const { deletePost } = 게시물들.actions;

const store = configureStore({
  reducer: {
    게시물들: 게시물들.reducer,
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
