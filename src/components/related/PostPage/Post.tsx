import React from 'react';
import { Card as BCard } from 'react-bootstrap';

import { PostDTO } from 'misc/dal';

/** Normal component's props that are to be passed. */
type OwnProps = { data: PostDTO; };

const Post: React.FC<OwnProps> = ({ data }) => (
  <BCard>
    <img
      className='card-img-top'
      src={data.imageURL}
      alt=''
      crossOrigin='anonymous'
    />
    <div className='card-body'>
      <h2 className='card-title'>{data.title}</h2>
      <p className='card-text'>{`${data.body}`}</p>
    </div>
    <div className='card-footer text-muted'>
      <p>{data.created}</p>
    </div>
  </BCard>
);

export default Post;
