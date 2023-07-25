import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail({ datas }) {
  const navigate = useNavigate();
  const { id } = useParams();
  // datas 배열에서 해당 id를 가진 데이터 필터링
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
