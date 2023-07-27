import Header from "../common/Header";
import Container from "../common/Container";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPost, clearForm } from "../index";

export default function Create() {
  // redux store에서 create 상태 가져오기
  const createForm = useSelector((state) => state.create);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  // input에 입력값이 변경될때
  const onChangeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 추가하기 버튼
  const onAddBtnHandler = (e) => {
    dispatch(
      addPost({
        id: nanoid(),
        author: "병수",
        title: inputs.title,
        content: inputs.content,
      })
    );
    dispatch(clearForm()); // 폼 초기화
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   setPosts((prev) => {
          //     return [
          //       ...prev,
          //       {
          //         id: nanoid(),
          //         author: "병수",
          //         ...inputs,
          //       },
          //     ];
          //   });
          //   navigate("/");
          // }}
        >
          <div>
            <input
              name="title"
              placeholder="제목"
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "8px",
                boxSizing: "border-box",
              }}
              value={inputs.title}
              onChange={onChangeHandler}
            />
          </div>
          <div
            style={{
              height: "400px",
            }}
          >
            <textarea
              name="content"
              placeholder="내용"
              style={{
                resize: "none",
                height: "100%",
                width: "100%",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "12px",
                boxSizing: "border-box",
              }}
              value={inputs.content}
              onChange={onChangeHandler}
            />
          </div>
          <button
            style={{
              width: "100%",
              height: "40px",
              border: "none",
              color: "white",
              borderRadius: "12px",
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
            onClick={onAddBtnHandler}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
