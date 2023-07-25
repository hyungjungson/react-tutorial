import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  // useNavigate로 페이지 이동
  const navigate = useNavigate();

  // 임시 데이터
  const [datas, setDatas] = useState([
    {
      id: 1,
      title: "제목입니다.",
      content: "내용입니다.",
      author:
        "작성자입니다. 추후에 firebase와 연결 후 이메일을 여기에 작성하겠습니다.",
    },
    {
      id: 2,
      title: "제목입니다2.",
      content: "내용입니다2.",
      author:
        "작성자입니다2. 추후에 firebase와 연결 후 이메일을 여기에 작성하겠습니다.",
    },
    {
      id: 3,
      title: "제목입니다3",
      content: "내용입니다3.",
      author:
        "작성자입니다3. 추후에 firebase와 연결 후 이메일을 여기에 작성하겠습니다.",
    },
  ]);

  // Edit 페이지로 이동
  const handleEditClick = (id) => {
    // datas배열에서 id와 일치하는 게시물 찾기
    const selectedData = datas.find((data) => data.id === id);
    // Edit 페이지로 이동하면서 선택된 게시물 데이터를 state에 전달
    if (selectedData) {
      navigate(`/edit`, { state: selectedData });
    }
  };

  // 수정 된 게시물 데이터
  const handleEditData = (editedData) => {
    // 수정된 데이터를 기존 데이터 리스트에서 업데이트
    const updatedDatas = datas.map((data) =>
      // data.id와 editedData.id가 일치한다면 editedData를 선택하고 그렇지 않으면 data를 선택
      data.id === editedData.id ? editedData : data
    );
    setDatas(updatedDatas);
    // 메인 페이지로 이동
    navigate("/");
  };

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route
        path="/"
        element={
          <Main
            datas={datas}
            setDatas={setDatas}
            handleEditClick={handleEditClick}
          />
        }
      />
      <Route path="/detail/:id" element={<Detail datas={datas} />} />
      <Route
        path="/create"
        element={<Create setDatas={setDatas} datas={datas} />}
      />
      <Route path="/edit" element={<Edit onEditData={handleEditData} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
