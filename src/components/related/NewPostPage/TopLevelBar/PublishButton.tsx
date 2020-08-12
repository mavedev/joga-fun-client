import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button as BButton } from 'react-bootstrap';

/** A button which main purpose is to call publish action. */
const PublishButton: React.FC<{}> = () => {
  const { t: translator } = useTranslation();

  return (
    <BButton variant='light'>
      {translator('Publish')}
    </BButton>
  );
};

export default PublishButton;
