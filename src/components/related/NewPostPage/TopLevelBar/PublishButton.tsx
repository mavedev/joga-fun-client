import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button as BButton } from 'react-bootstrap';

/** Normal compenent's props. */
type OwnProps = { action: () => void; };

/** A button which main purpose is to call publish action. */
const PublishButton: React.FC<OwnProps> = ({ action }) => {
  const { t: translator } = useTranslation();

  return (
    <BButton variant='light' onClick={() => { action(); }}>
      {translator('Publish')}
    </BButton>
  );
};

export default PublishButton;
