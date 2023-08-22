import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
