import React from 'react';
import theme from '../utils/theme';

const DecoratedLink = ({children}) => {
  return (
    <span className='decoratedLink'>
      <span className='decoratedLink__text' >
        {children}
      </span>
    </span>
  );
}

export default DecoratedLink;

