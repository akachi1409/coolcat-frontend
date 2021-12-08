import './App.css';

import Navbar from "./components/navbar/navbar.js";
import Header from './components/header/header';
import Main from "./components/main/main";
import Yellow from "./components/yellow/yellow";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div >
      <div className ="wrapper about ">
        <Navbar/>
      </div>
        <section className="default-page default-page--about">
          <Header/>
          <Main/>
          <Yellow/>
        </section>
        <Footer/>
    </div>
  );
}

export default App;
