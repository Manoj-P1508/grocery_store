import './style.css';
import Header from './components/header';
import Home from './components/home';
import Features from './components/features';
import Products from './components/products';
import Categories from './components/categories';
import Reviews from './components/reviews';
import Blogs from './components/blogs';
import Footer from './components/footer';
import Maps from './components/map';

function App() {
  return(
    <>
        <Header/>
        <Home/>
        <Features/>
        <Products/>
        <Categories/>
        <Reviews/>
        <Blogs/>
        <Footer/>    
        <Maps/>     
     </>
  );
}
        


export default App;