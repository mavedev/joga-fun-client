import React from 'react';
import withCSSModule from 'react-css-modules';

import { SocialLinkStyles as styles } from 'styles';

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
