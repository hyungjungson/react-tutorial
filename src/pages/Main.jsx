import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";

export default function Main() {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      title: "제목입니다.",
      content: "내용입니다.",
      author:
        "작성자입니다. 추후에 firebase와 연결 후 이메일을 여기에 작성하겠습니다.",
    },
  ]);
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
        {data.map((dataList) => {
          return (
            <div
              key={dataList.id} // key값 관련 warning 방지
              style={{
                backgroundColor: "#EEEEEE",
                height: "100px",
                borderRadius: "24px",
                marginBottom: "12px",
                display: "flex",
                padding: "12px 16px 12px 16px",
              }}
            >
              <div
                onClick={() => {
                  navigate("/detail/1");
                }}
                style={{
                  flex: 4,
                  borderRight: "1px solid lightgrey",
                  cursor: "pointer",
                }}
              >
                <h2>{dataList.title}</h2>
                <p
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {dataList.content}
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
                <div>{dataList.authors}</div>
                <div>
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
            </div>
          );
        })}

        {/* {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: "#EEEEEE",
              height: "100px",
              borderRadius: "24px",
              marginBottom: "12px",
              display: "flex",
              padding: "12px 16px 12px 16px",
            }}
          >
            <div
              onClick={() => {
                navigate("/detail/1");
              }}
              style={{
                flex: 4,
                borderRight: "1px solid lightgrey",
                cursor: "pointer",
              }}
            >
              <h2>제목</h2>
              <p
                style={{
                  width: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor,
                sit amet consectetur adipisicing elit.
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
              <div>작성자</div>
              <div>
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
          </div>
        ))} */}
      </Container>
    </>
  );
}
