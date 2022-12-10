import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../util/posts-util";
import Head from "next/head";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Anna; Blog</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default HomePage;
