import './App.css';
import Button from './compenents/button'
import Card from './compenents/card'

function App() {
  return (
    <>
      <Card
        title='My blog post'
        cover={'https://source.unsplash.com/random/445x150'}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Autem repudiandae ex, consectetur sit explicabo sequi magnam aliquid eveniet
          quia error a, ab fugit vel debitis fuga repellendus rem quo facilis.
        </p>
      </Card>
      <Button>Submit</Button>
    </>
  );
}

export default App;
