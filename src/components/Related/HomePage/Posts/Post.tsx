import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card as BCard } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { PostDTO } from 'misc/dal';

import 'components/common/Navbar/LangSwitcher/node_modules/bootstrap/dist/css/bootstrap.min.css';

/** Normal component's props that are to be passed. */
type OwnProps = { data: PostDTO; };

const Post: React.FC<OwnProps> = ({ data }) => {
  const { t: translator } = useTranslation();

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
          <p className='card-text'>{`${data.body.slice(0, 100)} ...`}</p>
          <NavLink to='/login' className='btn btn-primary'>
            {`${translator('ReadFull')} `}
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
