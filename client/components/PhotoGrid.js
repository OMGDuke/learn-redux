import React from 'react';

import Photo from './Photo';

export default props => (
  <div className="photo-grid">
    {props.posts.map((post, i) => <Photo {...props} key={post.code} i={i} post={post} />)}
  </div>
);
