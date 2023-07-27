import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../index";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const posts = useSelector((state) => state.게시물들);
  const post = posts.find((post) => post.id === id);

  return (
    <>
      <Header />
      <Container>
        <h1
          style={{
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {post?.title}
        </h1>
        <div
          style={{
            height: "400px",
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {post?.content}
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
              navigate("/edit", {
                state: {
                  post,
                },
              });
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
              const result = window.confirm("정말로 삭제하시겠습니까?");
              if (result) {
                dispatch(deletePost(post.id));
                // setPosts((prev) => prev.filter((p) => p.id !== post.id));
                navigate("/");
              }
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
      </Container>
    </>
  );
}
