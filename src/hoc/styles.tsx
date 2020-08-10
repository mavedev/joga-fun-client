import withCSSModule from 'react-css-modules';

/** CSS module type declaration.  */
type CSSModuleClassnames = {
  readonly [key: string]: string;
};

/** Partial application for CSS module HOC accepting the module itself. */
export const withCSSModulePartiallyApplied = (styles: CSSModuleClassnames) => {
  return (Component: AnyComponent) => withCSSModule(Component, styles);
};
