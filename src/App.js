import './App.css';
import Card from './Components/Card/Card';
import CartImage from './Components/CartImage/CartImage';
import img from './images/img.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App app-container'>
      <Card>
        <CartImage link={img} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#/" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>

      <Card>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#/" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>
    </div>
  );
}

export default App;
