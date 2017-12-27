import React from 'react'
import PropTypes from 'prop-types'
import theme from '../utils/theme';

import './index.css'
import '../utils/prism.css';

const FOOTER_ART = [
`
 _____       _
|     |___ _| |___
|   --| . | . | -_|
|_____|___|___|___|
`,
`
 ______     ______     _____     ______
/\\  ___\\   /\\  __ \\   /\\  __-.  /\\  ___\\
\\ \\ \\____  \\ \\ \\/\\ \\  \\ \\ \\/\\ \\ \\ \\  __\\
 \\ \\_____\\  \\ \\_____\\  \\ \\____-  \\ \\_____\\
  \\/_____\/   \\/_____/   \\/____/   \\/_____/
`,
`
  ____          _
 / ___|___   __| | ___
| |   / _ \\ / _\` |/ _ \\
| |__| (_) | (_| |  __/
 \\____\\___/ \\__,_|\\___|
`
];

const TemplateWrapper = (props) => {
  const {children} = props;
  const artIndex = Math.ceil(Math.random() * 100) % FOOTER_ART.length;
  return (
    <div>
      {children()}
      <footer className='footer'>
        <a style={{color: theme.text}}
          href='https://github.com/flpvsk/codepodcast.com'>
          <pre>{FOOTER_ART[artIndex]}</pre>
        </a>
      </footer>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export default TemplateWrapper

