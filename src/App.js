import './App.css';

import Navbar from "./components/navbar/navbar.js";
import Header from './components/header/header';
function App() {
  return (
    <div >
      <div className ="wrapper about ">
        <Navbar/>
      </div>
        <section className="default-page default-page--about">
          <Header/>
        </section>
      
    </div>
  );
}

export default App;
