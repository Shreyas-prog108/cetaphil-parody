import './App.css';
import { Navbar } from './Navbar';
import { Products } from './Products';
import { ProductCard } from './ProductCard';
import cleanserImg from '/assets/Cleanser.png';

function App() {
  return (
    <>
      <Navbar />
      <section id="home" className='hero-section'>
        <h1>Gentle Care for Sensitive Skin</h1>
        <p>Trusted by Doctors. Loved by Millions.</p>
        <img src={cleanserImg} alt="Cetaphil Cleanser" className="hero-image"/>
      </section>
      <section id="products" className='product-grid'>
        {Products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </section>
      <footer className='footer'>
        <p>
          <a href="#" className='footer-link'>Learn More about Cetaphil</a>
        </p>
        <p className='footer-Note'>
          This website is purely with the purpose to learn development. We neither endorse or criticize the product.
        </p>
      </footer>
    </>
  );
}

export default App
