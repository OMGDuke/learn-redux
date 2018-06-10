import React from 'react';
import Photo from './Photo';

export default props => {
  const { posts, params } = props;
  const i = posts.findIndex(post => post.code === params.postId);
  const post = posts[i];
  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
    </div>
  );
};
