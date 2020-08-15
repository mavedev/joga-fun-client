import React from 'react';
import ReactQuill from 'react-quill';
import { NavLink } from 'react-router-dom';
import { Card as BCard } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { PostDTO } from 'misc/dal';

/** Normal component's props that are to be passed. */
type OwnProps = { data: PostDTO; };

const Post: React.FC<OwnProps> = ({ data }) => {
  const { t: translator } = useTranslation();

  return (
    <BCard>
      <img
        className='card-img-top'
        src={data.imageURL}
        alt=''
        crossOrigin='anonymous'
      />
      <div className='card-body'>
        <h2 className='card-title'>{data.title}</h2>
        <ReactQuill
          className='Quill--Observing'
          value={`${data.body.slice(0, 100)} ...`}
          modules={{ toolbar: false }}
          readOnly
        />
        <NavLink to={`/post/${data.id}`} className='btn btn-primary'>
          {`${translator('ReadFull')} `}
          &rarr;
        </NavLink>
      </div>
      <div className='card-footer text-muted'>
        <p>{data.created}</p>
      </div>
    </BCard>
  );
};

export default Post;
