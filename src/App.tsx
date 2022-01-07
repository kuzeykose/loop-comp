import './App.css';

import Button from './compenents/button'

function App() {

  const myFunction = () => {
    console.log('aa');
  }

  return (
    <div>
      <Button
        style={{background: 'red'}}
        onClick={myFunction}
        traditionalCSS='defaultButton'
      >
        Save
      </Button>
    </div>
  );
}

export default App;
