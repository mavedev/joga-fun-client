import React from 'react';
import withCSSModule from 'react-css-modules';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button as BButton } from 'react-bootstrap';

import { APIResponse } from 'misc/api';
import { NewPostBoxPublishButtonStyles as styles } from 'styles';

import loader from 'assets/svg/loader.svg';

/** Normal compenent's props. */
type OwnProps = { action: () => APIResponse; };

/** A button which main purpose is to call publish action. */
const PublishButton: React.FC<OwnProps> = ({ action }) => {
  const history = useHistory();
  const { t: translator } = useTranslation();
  const [isPending, setIsPending] = React.useState(false);

  return (
    <div styleName='PublishButton__MainWrapper'>
      <BButton
        variant='light'
        onClick={() => {
          setIsPending(true);
          action().then(() => {
            setIsPending(false);
            history.replace('/empty');
            history.replace('/manage');
          });
        }}
      >
        {translator('Publish')}
      </BButton>
      {
      isPending
        ? (
          <div styleName='PublishButton__LoaderWrapper'>
            <img styleName='PublishButton__Loader' src={loader} alt='Loading...' />
          </div>
        )
        : null
      }
    </div>
  );
};

export default withCSSModule(PublishButton, styles);
