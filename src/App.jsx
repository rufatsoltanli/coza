import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home';
import MainLayout from './layout/MainLayout';
import ShopPage from './Pages/Shop';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/" element={<ShopPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
