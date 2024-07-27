import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
export interface PaginateProps {
  total: number;
  perPage: number;
  value: number;
  onChange: (page: number) => void;
  isMobile?: boolean;
}
const Paginate: React.FC<PaginateProps> = ({ total, perPage, value, onChange, isMobile }) => {
  if (isMobile) {
    return (
      <ul className="pagination" style={{ float: 'right' }}>
        <li className="page-item" style={{ width: '120px' }}>
          <button
            onClick={() => onChange?.(value - 1)}
            style={{ padding: '0.5rem 0.5rem' }}
            className="page-link"
            rel="prev"
            aria-label="« Previous"
          >
            ‹ Trang trước
          </button>
        </li>

        <li className="page-item" style={{ width: '120px' }}>
          <button
            onClick={() => onChange?.(value + 1)}
            style={{ padding: '0.5rem 0.5rem' }}
            className="page-link"
            rel="next"
            aria-label="Next »"
          >
            Trang sau ›
          </button>
        </li>
      </ul>
    );
  }

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel="›"
      initialPage={value - 1}
      onPageChange={(page) => onChange?.(page.selected + 1)}
      pageRangeDisplayed={2}
      pageCount={Math.ceil(total / perPage)}
      previousLabel="‹"
      renderOnZeroPageCount={null}
      activeClassName="active"
    />
  );
};

export default memo(Paginate);
