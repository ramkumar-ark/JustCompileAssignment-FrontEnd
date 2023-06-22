import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";

export default function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <WelcomePage/>
      </main>
      <Footer/>
    </>
    
  );
}