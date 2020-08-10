/// <reference types="react-scripts" />

/** Short for T | undefind. */
type Maybe<T> = T | undefined;

/** Reduction for React component accepting any type of props. */
type AnyComponent = React.ComponentType<any>;
