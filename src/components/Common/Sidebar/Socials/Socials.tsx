import React from 'react';
import withCSSModule from 'react-css-modules';
import { Col as BColumn, Row as BRow } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialsStyles as styles } from 'styles';
import SocialLink from './SocialLink';

/** A block with social links. */
const Socials: React.FC<{}> = () => {
  const { t: translator } = useTranslation();
  const linkFB = process.env.REACT_APP_LINK_FB || '/';
  const linkTW = process.env.REACT_APP_LINK_TW || '/';
  const linkVK = process.env.REACT_APP_LINK_VK || '/';

  return (
    <div>
      <BColumn>
        <h3 className='my-4' styleName='Socials__Title'>
          {translator('OurSocials')}
        </h3>
        <BRow className='justify-content-center align-items-center'>
          <SocialLink
            href={linkFB}
            className='fa fa-facebook'
            ownStyleName='SocialLink--OfFacebook'
          />
          <SocialLink
            href={linkTW}
            className='fa fa-twitter'
            ownStyleName='SocialLink--OfTwitter'
          />
          <SocialLink
            href={linkVK}
            className='fa fa-vk'
            ownStyleName='SocialLink--OfVk'
          />
        </BRow>
      </BColumn>
    </div>
  );
};

export default withCSSModule(Socials, styles);
