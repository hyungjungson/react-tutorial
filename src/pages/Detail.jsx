import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

// App.jsx에서 props로 전달 받아온다.
export default function Detail({ datas }) {
  // 페이지 이동
  const navigate = useNavigate();
  // useParams로 id 가져오기
  const { id } = useParams();
  // datas 배열에서 해당 id를 가진 데이터를 찾기
  const data = datas.find((data) => data.id === Number(id));
  // console.log(datas);
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1
            style={{
              border: "1px solid lightgray",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            {data.title}
          </h1>
          <div
            style={{
              height: "400px",
              border: "1px solid lightgray",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            {data.content}
          </div>
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            {/* 수정 버튼 클릭시 edit페이지로 이동 */}
            <button
              onClick={() => {
                navigate("/edit");
              }}
              style={{
                border: "none",
                padding: "8px",
                borderRadius: "6px",
                backgroundColor: "orange",
                color: "white",
                cursor: "pointer",
                marginRight: "6px",
              }}
            >
              수정
            </button>
            <button
              onClick={() => {
                alert("삭제할까?");
              }}
              style={{
                border: "none",
                padding: "8px",
                borderRadius: "6px",
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
              }}
            >
              삭제
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
