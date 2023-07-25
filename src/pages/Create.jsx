import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";

// App.jsx에서 props로 전달 받아온다.
export default function Create({ setDatas, datas }) {
  // 페이지 이동
  const navigate = useNavigate();

  // 수정할 게시물의 제목,내용을 담는다. useState로 초기값 세팅
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  // 입력 값 변경 시
  const handleChange = (e) => {
    // 입력 필드의 이름과 값 가져오기
    const { name, value } = e.target;
    // setFormData 함수를 호출해 이전 폼 데이터 업데이트
    // 이전 폼 데이터를 복제해 변경 값을 새로운 값으로 저장
    setFormData((prevFormData) => ({
      // prevFormData를 spread문법으로 펼쳐서
      ...prevFormData,
      // 새로운 입력 필드 name 사용하여 해당 값을 업데이트
      [name]: value,
    }));
  };

  // 추가하기 버튼 클릭 시 동작
  const handleSubmit = (e) => {
    // 현재 이벤트 동작 중단
    e.preventDefault();
    // 새로운 게시물을 생성하기 위한 id 생성
    const newId = datas.length + 1;
    const newData = { id: newId, ...formData };
    // 새 게시물을 기존 데이터에 추가하고 입력 값 초기화
    setDatas([...datas, newData]);
    setFormData({
      title: "",
      content: "",
    });
    // 추가 후 메인 페이지로 이동
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
            style={{
              width: "100%",
              height: "40px",
              border: "none",
              color: "white",
              borderRadius: "12px",
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
