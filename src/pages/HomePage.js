import { useState, useEffect } from "react";
import { PostCard, PostCardSkeleton } from "../components";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useRef } from "react";
import { useTitle } from "../hooks/useTitle";
export const HomePage = () => {
  useTitle("All");
  const [posts, setPosts] = useState(new Array(3).fill(false));
  const [toggle, setToggle] = useState(false);
  const postRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
      console.log("---");
    }
    getPosts();
  }, [toggle, postRef]);

  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <PostCard
            key={post.id}
            post={post}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <PostCardSkeleton key={index} />
        )
      )}
    </section>
  );
};

//   const posts = [
//     { id: 1, title: "dkljj", description: "ldjaljdljalsdjf", author: "gqli" },
//     { id: 2, title: "dkljj", description: "ldjaljdljalsdjf", author: "gqli" },
//   ];
