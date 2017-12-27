import React from 'react'
import PropTypes from 'prop-types'
import theme from '../utils/theme';

import './index.css'

const TemplateWrapper = (props) => {
  const {children} = props;
  console.log('xxx template', props);

  return (
    <div>
      {children()}
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export default TemplateWrapper

