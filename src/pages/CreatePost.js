import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
  const navigate = useNavigate();
  const postsRef = collection(db, "posts");
  useTitle("Create");

  async function handleSubmitPost(event) {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: event.target.author.value,
    };

    await addDoc(postsRef, data);
    console.log("post uploaded", postsRef.id);
    navigate("/");
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleSubmitPost}>
        <input
          type="text"
          className="title"
          name="author"
          placeholder="Author"
          maxLength="40"
          required
        />
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          type="text"
          className="description"
          name="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
