import React from 'react';
import { Pagination as BPagination } from 'react-bootstrap';

const Pagination = () => (
  <div className='MainWrapper'>
    <BPagination>
      <BPagination.First />
      <BPagination.Prev />
      <BPagination.Item>{1}</BPagination.Item>
      <BPagination.Next />
      <BPagination.Last />
    </BPagination>
  </div>
);

export default Pagination;
