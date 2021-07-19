import './assets/css/App.css';
import NavBar from './components/NavBar';
import CrudApi from './components/NewContact';

function App() {
  
  return (
      
    <div className="App">           
        <header className="App-header">
          <NavBar/>                
        </header> 
        
        <CrudApi/>      
    </div>
   

  );
}

export default App;
