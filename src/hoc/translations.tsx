import React, { useState } from 'react';

type AnyComponent = React.ComponentType<any>;

const withTranslator = (Wrapped: AnyComponent) => (props: any) => <div />;
