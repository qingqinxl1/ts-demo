import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Hello } from './components/greeter';

ReactDom.render(
  <Hello compiler="typescript" framework="react" />,
  document.getElementById('demo')
)

