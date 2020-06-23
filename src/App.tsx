import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';

function App() {
  return (
    <div className="App">
      <Button> Hello </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
      <Button btnType={ButtonType.Danger}> Hello </Button>
      <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Small}> Hello </Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com'> Hello </Button>
      <Button btnType={ButtonType.Link} disabled href='https://www.baidu.com'> Hello </Button>
      <Menu />
    </div>
  );
}

export default App;
