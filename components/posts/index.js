import React, { Component } from 'react';
import PostCard from "../postcard"


export default function Posts({ posts }) {

  return (
    <div class="flex flex-wrap justify-between pt-12 -mx-6">
      {posts.map(post => (
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
      ))}
    </div>
  );
}
