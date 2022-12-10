import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../util/posts-util";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}

export default AllPostsPage;
