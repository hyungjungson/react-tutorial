import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
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

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main datas={datas} />} />
      <Route path="/detail/:id" element={<Detail datas={datas} />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
