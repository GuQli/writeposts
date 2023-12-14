import Skeleton from "react-loading-skeleton";

export const PostCardSkeleton = () => {
  return (
    <div className="card">
      <p className="title">
        <Skeleton />
      </p>
      <p className="description">
        <Skeleton count={5} />
      </p>
      <p className="control">
        <span className="author">
          <Skeleton width="50px" />
        </span>
      </p>
    </div>
  );
};
