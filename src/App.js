import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us"></Navbar>
    <div className="container">
      {/*<TextForm heading="Enter the text here"/>*/}
      <About></About>
    </div>
    </>
  );
}

export default App;
