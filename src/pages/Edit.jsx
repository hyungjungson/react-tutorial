import { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateTitle, updateContent, updatePost } from "../index";

export default function Edit() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const editForm = useSelector((state) => state.create);
  const dispatch = useDispatch();

  // const [inputs, setInputs] = useState({
  //   title: state?.post.title || "",
  //   content: state?.post.content || "",
  // });

  const onChangeHandler = (e) => {
    // setInputs((prev) => ({
    //   ...prev,
    //   [e.target.name]: e.target.value,
    // }));

    const { name, value } = e.target;
    if (name === "title") {
      dispatch(updateTitle(value));
    } else if (name === "content") {
      dispatch(updateContent(value));
    }
  };

  const onSaveBtnHandler = (e) => {
    e.preventDefault();
    // 수정 내용 저장
    dispatch(
      updatePost({
        id: state?.post.id,
        title: editForm.title,
        content: editForm.content,
      })
    );
    navigate("/");
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          onSubmit={onSaveBtnHandler}
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
              value={editForm.title}
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
              value={editForm.content}
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
              backgroundColor: "orange",
              cursor: "pointer",
            }}
          >
            수정하기
          </button>
        </form>
      </Container>
    </Fragment>
  );
}
