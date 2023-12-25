import logo from './logo.svg';
import './App.css';
import ROIcal from './Roi';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         ROI Calculator
        </p>
   <ROIcal/>
      </header>
    </div>
  );
}

export default App;
