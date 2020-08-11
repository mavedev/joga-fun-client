import React from 'react';
import withCSSModule from 'react-css-modules';

import styles from 'styles/Common/Sidebar/Socials/SocialLink.module.scss';

/** Normal props of the component. */
type OwnProps = {
  href: Maybe<string>;
  className: Maybe<string>;
  ownStyleName: Maybe<string>;
};

/** A styled social network link. */
const SocialLink: React.FC<OwnProps> = ({ href, className, ownStyleName }) => (
  <a href={href} styleName={ownStyleName}>
    <i className={className} />
  </a>
);

export default withCSSModule(SocialLink, styles);
