import withCSSModule from 'react-css-modules';

/** CSS module type declaration.  */
type CSSModuleClassnames = {
  readonly [key: string]: string;
};

export const withCSSModulePartiallyApplied = (cn: CSSModuleClassnames) => {
  return (Component: AnyComponent) => withCSSModule(Component, cn);
};
