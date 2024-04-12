import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';
import Category from './components/Category';
import TopDestinations from './components/TopDestinations';
import EasyFast from './components/EasyFast';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Maincontent/>
     <Category/>
     <TopDestinations/>
     <EasyFast/>
     <NewsLetter/>
     <Footer/>
    </div>
  );
}

export default App;
