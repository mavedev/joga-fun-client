import React from 'react';
import withCSSModule from 'react-css-modules';
import { Card as BCard } from 'react-bootstrap';

import { PostDTO } from 'misc/dal';
import { PostPagePostStyles as styles } from 'styles';

/** Normal component's props that are to be passed. */
type OwnProps = { data: PostDTO; };

/** Actual post retrieving. */
const getActualPost = (data: PostDTO) => (
  <>
    <div styleName='Post__TitleAndImageWrapper'>
      <h2 className='card-title'>{data.title}</h2>
      <img
        className='card-img-top'
        styleName='Post__Image'
        src={data.imageURL}
        alt=''
        crossOrigin='anonymous'
      />
    </div>
    <p className='card-text'>{`${data.body}`}</p>
  </>
);

/** Not found message. */
const getDummy = () => (
  <div styleName='Post__TitleAndImageWrapper'>
    <h2 className='card-title'>:(</h2>
  </div>
);

/** The post component itself. */
const Post: React.FC<OwnProps> = ({ data }) => (
  <BCard styleName='Post__BCard'>
    <div className='card-body'>
      {data.id ? getActualPost(data) : getDummy()}
    </div>
    <div className='card-footer text-muted'>
      <p>{data.created}</p>
    </div>
  </BCard>
);

export default withCSSModule(Post, styles);
