import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";

// App.jsx에서 props로 전달 받아온다.
export default function Main({ datas, setDatas, handleEditClick }) {
  // 페이지 이동 navigate 함수
  const navigate = useNavigate();

  // 삭제버튼 클릭시 삭제
  const handleDeleteClick = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    // 선택된 게시물을 제외하고 새 게시물 리스트 newDiaryList를 생성
    const newDiaryList = datas.filter((data) => {
      return data.id !== targetId;
    });
    // 새 게시물 리스트를 상태에 저장
    setDatas(newDiaryList);
  };

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "12px",
          }}
        >
          <button
            onClick={() => {
              navigate("/create");
            }}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            추가
          </button>
        </div>
        {/* useState를 활용하여 데이터 보여주고 map함수를 사용하여 리스트 보여주기 */}
        {datas.map((data) => {
          return (
            <div
              key={data.id} // key값 관련 warning 방지
              style={{
                backgroundColor: "#EEEEEE",
                height: "100px",
                borderRadius: "24px",
                marginBottom: "12px",
                display: "flex",
                padding: "12px 16px 12px 16px",
              }}
            >
              {/* App.jsx에서 props로 받아서 클릭시 수정페이지로 이동 */}
              <div
                onClick={() => handleEditClick(data.id)}
                style={{
                  flex: 4,
                  borderRight: "1px solid lightgrey",
                  cursor: "pointer",
                }}
              >
                {/* App.jsx에서 props로 받아서 제목 데이터 받아오기  */}
                <h2>{data.title}</h2>
                <p
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* App.jsx에서 props로 받아서 내용 데이터 받아오기  */}
                  {data.content}
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  justifyContent: "space-around",
                  gap: "12px",
                }}
              >
                {/* App.jsx에서 props로 받아서 작성자 데이터 받아오기  */}
                <div>{data.author}</div>
                <div>
                  {/* 클릭시 edit페이지로 이동 */}
                  <button
                    onClick={() => handleEditClick(data.id)}
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
                  {/* 삭제 버튼 클릭시 게시물 삭제 */}
                  <button
                    onClick={() => handleDeleteClick(data.id)}
                    // onClick={() => {
                    //   alert("삭제할까?");
                    // }}
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
            </div>
          );
        })}
      </Container>
    </>
  );
}
