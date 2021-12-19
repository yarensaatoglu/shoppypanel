import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/pages/Home.js"
import Login from "./components/pages/Login.js"
import Products from "./components/pages/Products.js"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </div>
  );
}

export default App;
