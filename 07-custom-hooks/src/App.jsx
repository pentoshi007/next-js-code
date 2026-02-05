

import './App.css'
import { useCart } from './hooks/useCart';
import { products } from './data/products';
import ProductCart from './components/ProductCart';
import Cart from './components/Cart';
function App() {

  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <>
      <h1>Custom Hooks</h1>
      <div className='app'>
        <header>
          <h1>Shopping Cart</h1>

        </header>
        <main className='products'>
          <section >
            <div className='products'>
              {products.map((product) => (
                <ProductCart key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </section>
          <Cart cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} total={total} />

        </main>
      </div>
    </>
  )
}

export default App
