import React from 'react';

/** Normal component props. */
type OwnProps = {};
/** Type of forwarded reference. */
type AnchorRefType = ((instance: HTMLDivElement | null) => void)
  | React.MutableRefObject<HTMLDivElement | null>
  | null;

/** A special dummy component used to be scrolled to. */
const ScrollAnchor = (_: OwnProps, ref: AnchorRefType) => (
  <div ref={ref} />
);

export default React.forwardRef<HTMLDivElement, OwnProps>(ScrollAnchor);
