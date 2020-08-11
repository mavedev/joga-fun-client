import React from 'react';
import { compose } from 'redux';
import { Col as BCol } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import styles from 'styles/Common/Sidebar/Sidebar.module.scss';
import { withCSSModulePartiallyApplied } from 'misc/hoc';
import Calendar from 'react-calendar';
import CategoriesContainer from 'components/Common/Categories';
import Socials from './Socials';

/** Normal props of the component. */
type OwnProps = {
  locale: string;
  scrollAction: () => void;
};

/** Sidebar column. */
const Sidebar: React.FC<OwnProps> = ({ locale, scrollAction }) => (
  <BCol md='4'>
    {/* Posts categories list. */}
    <CategoriesContainer scrollAction={scrollAction} />
    <div styleName='Sidebar__CalendarWrapper'>
      {/* React Calendar instance. */}
      <Calendar locale={locale} />
    </div>
    {/* Owner's social buttons. */}
    <Socials />
  </BCol>
);

/* Using memoizing because the sidebar is rarely changed by itself. */
export default compose<React.ComponentType<OwnProps>>(
  React.memo,
  withCSSModulePartiallyApplied(styles)
)(Sidebar);
