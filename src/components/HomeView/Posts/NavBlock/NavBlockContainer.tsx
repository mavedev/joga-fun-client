import React from 'react';
import { connect } from 'react-redux';

import { AppState, createSetCurrentPostChunkNumber } from 'store';
import NavBlock from './NavBlock';

/* Store state props type. */
type MapStateProps = {
  currentPostsChunkNumber: number;
  chunksLeft: number;
};
/* Store dispatch props type. */
type MapDispatchProps = {
  setCurrentPostsChunkNumber: (chunk: number) => void;
};
/* Normal component's props that are to be passed. */
type OwnProps = {};
/* All props type. */
type AllProps = MapStateProps & MapDispatchProps & OwnProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  currentPostsChunkNumber: state.posts.currentPostsChunkNumber,
  chunksLeft: state.posts.chunksLeft
});

const mapDispatchToProps: MapDispatchProps = {
  setCurrentPostsChunkNumber: createSetCurrentPostChunkNumber
};

/** A wrapper for the NavBlock component getting posts info from the store. */
const NavBlockContainer: React.FC<AllProps> = ({
  chunksLeft,
  currentPostsChunkNumber,
  setCurrentPostsChunkNumber
}: AllProps) => (
  <NavBlock
    enablePrev={currentPostsChunkNumber > 1}
    enableNext={chunksLeft > 0}
    nextAction={() => {
      setCurrentPostsChunkNumber(currentPostsChunkNumber + 1);
    }}
    prevAction={() => {
      setCurrentPostsChunkNumber(currentPostsChunkNumber - 1);
    }}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBlockContainer);
