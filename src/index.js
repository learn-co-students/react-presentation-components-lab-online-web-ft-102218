import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let msg = ''

const message = (clickMsg) => {

  if(clickMsg == '') {
      msg = 'sad'
  } else {
      msg = 'happy'
  }
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <br/>
    <SimplerComponent handleClick={message()} messageProp={msg}/>
  </div>,
  document.getElementById('root')
);