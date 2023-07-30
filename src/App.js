
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import CatalogPage from './pages/CatalogPage';
import AllProductsPage from './pages/AllProductsPage';
import AllSallesPage from './pages/AllSalesPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/products' element={<AllProductsPage />} />
          <Route path='/sales' element={<AllSallesPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/catalog/:name' element={<ProductsByCategoryPage />} />
          <Route path='/product/:productId' element={<SingleProductPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
