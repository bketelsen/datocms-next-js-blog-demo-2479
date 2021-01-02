import React, { Component } from 'react';
import PostCard from "../postcard"


export default function Posts({ posts }) {

  return (

    posts.map(post => (
      <PostCard
        key={post.slug}
        title={post.title}
        category={post.category.name}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
        slug={post.slug}
        excerpt={post.excerpt}
      />
    ))

  );
}
