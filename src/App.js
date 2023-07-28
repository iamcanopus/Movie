import './App.css';
import Header from './component/Header';
import Movies from './component/Movies';
import data from './data.json';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <div className='main'> 
      {
        data.map((element,index) => {
          return(
        <Movies
        key={index}
        title ={element.Title}
        year={element.Year}
        img={element.Poster}
        />
         ) })
      }         
      </div>
      </div>
        );
}

export default App;
