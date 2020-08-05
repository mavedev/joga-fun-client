import React from 'react';
import {
  Card as BCard
} from 'react-bootstrap';

import { PostDTO } from 'dal';
import cx from 'classnames';
import styles from 'styles/HomeView/Posts/Post.module.scss';

/* Normal component's props that are to be passed. */
type OwnProps = { data: PostDTO; };

const Post: React.FC<OwnProps> = ({ data }: OwnProps) => (
  <div className='MainWrapper'>
    <BCard>
      <img
        className='card-img-top'
        src={data.imageURL}
        alt=''
      />
      <div className='card-body'>
        <h2 className='card-title'>{data.title}</h2>
        <p
          className='card-text'
        >
          {`${data.body.slice(0, 100)} ...`}
        </p>
        <a
          href='/'
          className={cx(
            'btn',
            'btn-primary',
            styles['disabled-link']
          )}
        >
          Читать полностью &rarr;
        </a>
      </div>
      <div className='card-footer text-muted'>
        <p>{data.created}</p>
      </div>
    </BCard>
  </div>
);

export default Post;
