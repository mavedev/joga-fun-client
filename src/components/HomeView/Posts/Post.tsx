import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card as BCard } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { PostDTO } from 'dal';
import cx from 'classnames';

import 'bootstrap/dist/css/bootstrap.min.css';

/* Normal component's props that are to be passed. */
type OwnProps = { data: PostDTO; };

const Post: React.FC<OwnProps> = ({ data }: OwnProps) => {
  const { t } = useTranslation();

  return (
    <div className='MainWrapper'>
      <BCard>
        <img
          className='card-img-top'
          src={data.imageURL}
          alt=''
          crossOrigin='anonymous'
        />
        <div className='card-body'>
          <h2 className='card-title'>{data.title}</h2>
          <p className='card-text'>
            {`${data.body.slice(0, 100)} ...`}
          </p>
          <NavLink to='/login' className={cx('btn', 'btn-primary')}>
            {`${t('ReadFull')} `}
            &rarr;
          </NavLink>
        </div>
        <div className='card-footer text-muted'>
          <p>{data.created}</p>
        </div>
      </BCard>
    </div>
  );
};

export default Post;
