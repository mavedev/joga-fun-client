import React from 'react';
import { Col as BCol } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import cn from 'styles/HomeView/Sidebar.module.scss';
import Calendar from 'react-calendar';
import CategoriesContainer from 'components/Categories';
import Socials from './Socials';

/* Sidebar column. */
const Sidebar: React.FC<{}> = () => (
  <BCol md='4' className='Sidebar'>
    {/* Posts categories list. */}
    <CategoriesContainer />
    {/* React Calendar instance. */}
    <Calendar className={cn['Sidebar__Calendar']} locale='ru-ru' />
    {/* Owner's social buttons. */}
    <Socials />
  </BCol>
);

/* Using memoizing because the sidebar is rarely changed by itself. */
export default React.memo(Sidebar);
