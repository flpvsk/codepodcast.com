import React from 'react';
import theme from '../utils/theme';

const DecoratedLink = ({children}) => {
  const colorDecoration = {
    color: theme.text
  };
  const colorText = {
    color: theme.link
  };

  return (
    <span className='decoratedLink'>
      <span className='decoratedLink__decoration' style={colorDecoration}>
        [
      </span>
      <span className='decoratedLink__text' style={colorText}>
        {children}
      </span>
      <span className='decoratedLink__decoration' style={colorDecoration}>
        ]
      </span>
    </span>
  );
}

export default DecoratedLink;

