import { db } from "../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

export const PostCard = ({ post, toggle, setToggle }) => {
  const { id, title, description, author } = post;

  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  function handleDelete() {
    const document = doc(db, "posts", id);
    deleteDoc(document);
    setToggle(!toggle);
  }

  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author">{author}</span>

        {isAuth && (
          <span className="delete" onClick={handleDelete}>
            <i className="bi bi-trash3"></i>
          </span>
        )}
      </p>
    </div>
  );
};
