import React from 'react';
import ReactQuill from 'react-quill';
import withCSSModule from 'react-css-modules';
import { Card as BCard } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { PostDTO } from 'misc/dal';
import { PostPagePostStyles as styles } from 'styles';

/** Normal component's props that are to be passed. */
type OwnProps = { data: PostDTO; };

/** Actual post retrieving. */
const getActualPost = (data: PostDTO) => (
  <>
    <div styleName='Post__TitleAndImageWrapper'>
      <h2 className='card-title'>{data.title}</h2>
      <div styleName='Post__ImageWrapper'>
        <img
          className='card-img-top'
          styleName='Post__Image'
          src={data.imageURL}
          alt=''
          crossOrigin='anonymous'
        />
      </div>
    </div>
    <ReactQuill
      className='Quill--Observing'
      value={data.body}
      modules={{ toolbar: false }}
      readOnly
    />
  </>
);

/** Not found message. */
const getDummy = ({ t: translator }: ReturnType<typeof useTranslation>) => (
  <div styleName='Post__TitleAndImageWrapper'>
    <h2 className='card-title'>{translator('NoPostFound')}</h2>
  </div>
);

/** The post component itself. */
const Post: React.FC<OwnProps> = ({ data }) => {
  const translationResponse = useTranslation();

  return (
    <BCard styleName='Post__BCard'>
      <div className='card-body'>
        {data.id ? getActualPost(data) : getDummy(translationResponse)}
      </div>
      <div className='card-footer text-muted'>
        <p>{data.created}</p>
      </div>
    </BCard>
  );
};

export default withCSSModule(Post, styles);
