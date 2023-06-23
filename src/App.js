import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}