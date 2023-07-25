import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";

// App.jsx에서 props로 전달 받아온다.
export default function Edit({ onEditData }) {
  const { state } = useLocation();
  // 페이지 이동
  const navigate = useNavigate();

  // 수정할 게시물의 제목,내용을 담는다. useState로 초기값 세팅
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  // Edit 페이지로 이동 시 선택된 게시물 데이터를 받아서 value에 저장
  useEffect(() => {
    // 수정할 게시물의 데이터가 전달되면
    if (state) {
      // setFormData를 사용해서 formData를 수정할 게시물 데이터로 초기화
      setFormData({
        // state.title, state.content이 null 또는 undefined면 빈 문자열로 초기화
        title: state.title || "",
        content: state.content || "",
      });
    }
  }, [state]);

  // 입력 값 변경 시
  const handleChange = (e) => {
    // 입력 필드의 이름과 값 가져오기
    const { name, value } = e.target;
    // setFormData 함수를 호출해 이전 폼 데이터를 업데이트
    // 이전 폼 데이터를 복제해 변경 값을 새로운 값으로 저장
    setFormData((prevFormData) => ({
      // prevFormData를 spread문법으로 펼쳐서
      ...prevFormData,
      // 새로운 입력 필드 name 사용하여 해당 값을 업데이트
      [name]: value,
    }));
  };

  // 수정하기 버튼 클릭 시
  const handleSubmit = (e) => {
    // 현재 이벤트 동작 중단
    e.preventDefault();
    // 수정된 데이터를 기존 데이터에 반영하는 함수 호출
    onEditData({
      ...state,
      title: formData.title,
      content: formData.content,
    });
    // 수정 완료 후 메인 페이지로 이동
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
          onSubmit={handleSubmit}
        >
          <div>
            <input
              name="title"
              value={formData.title}
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
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              height: "400px",
            }}
          >
            <textarea
              name="content"
              value={formData.content}
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
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
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
