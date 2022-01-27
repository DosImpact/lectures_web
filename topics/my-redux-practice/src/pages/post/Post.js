import { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  getPostsQuery,
  getPostV2Query,
} from "../common/state/queryActions";
import PostContext from "./PostContext";

const View = () => {
  return (
    <>
      <h3>Post</h3>
      <PostSelector />
      <PostView />
    </>
  );
};

const PostSelector = () => {
  const { page, setPage, totalPage, handleGetPostById } =
    useContext(PostContext);
  return (
    <>
      <div>
        now page : {page} / {totalPage}
      </div>
      <ul>
        {new Array(totalPage).fill(0).map((_, idx) => {
          const p = idx + 1;
          return (
            <button
              onClick={() => {
                setPage(p);
                handleGetPostById(p);
              }}
              key={p}
            >
              {p}
            </button>
          );
        })}
      </ul>
    </>
  );
};

const PostView = () => {
  const { postQuery } = useContext(PostContext);
  return <>{JSON.stringify(postQuery.data)}</>;
};

const ViewModel = () => {
  const dispatch = useDispatch();
  const postQuery = useSelector((state) => state?.query?.post);
  const postsQuery = useSelector((state) => state?.query?.posts);

  const [page, setPage] = useState(1);

  const handleGetPostById = (id) => {
    dispatch(getPostV2Query({ id }));
  };

  const postsCounter = useMemo(
    () => (postsQuery?.data || []).length,
    [postsQuery]
  );

  useEffect(() => {
    dispatch(getPostsQuery());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPostV2Query({ id: 1 }));
  }, [dispatch]);

  return (
    <PostContext.Provider
      value={{
        page,
        setPage,
        totalPage: postsCounter,
        postQuery,
        postsQuery,
        handleGetPostById,
      }}
    >
      <View />
    </PostContext.Provider>
  );
};

const Post = () => {
  return <ViewModel />;
};

export default Post;
