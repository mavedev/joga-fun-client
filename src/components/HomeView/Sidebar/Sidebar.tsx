import React from 'react';
import { Col as BCol } from 'react-bootstrap';
import { i18n } from 'i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import cn from 'styles/HomeView/Sidebar.module.scss';
import Calendar from 'react-calendar';
import CategoriesContainer from 'components/Categories';
import Socials from './Socials';

/* Normal props of the component. */
type OwnProps = { localizer: i18n; };

/* Sidebar column. */
const Sidebar: React.FC<OwnProps> = ({ localizer }: OwnProps) => (
  <BCol md='4' className='Sidebar'>
    {/* Posts categories list. */}
    <CategoriesContainer />
    {/* React Calendar instance. */}
    <Calendar className={cn['Sidebar__Calendar']} locale={localizer.language} />
    {/* Owner's social buttons. */}
    <Socials />
  </BCol>
);

/* Using memoizing because the sidebar is rarely changed by itself. */
export default React.memo(Sidebar);
