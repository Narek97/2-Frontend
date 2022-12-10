import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { IPost } from "../models/IPost";

const PostContainer = () => {
  // RTK query

  const [limit, setLimit] = useState(100);
  const {
    isLoading,
    data: posts,
    error,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 1000,
  });

  const [
    createPost,
    {
      isLoading: createPostLoading,
      data: createPostData,
      error: createPostError,
    },
  ] = postAPI.useCreatePostMutation();

  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(3);
  //   }, 2000);
  // }, []);

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{"error"}</div>;
  }

  return (
    <div>
      <button onClick={handleCreate}>Add new post</button>
      <button onClick={refetch}>Refetch</button>
      {posts?.map((post) => (
        <PostItem
          post={post}
          remove={handleRemove}
          update={handleUpdate}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostContainer;
