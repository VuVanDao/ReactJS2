import logo from "./logo.svg";
import "./App.scss";
import Hello from "./ex/Hello";
import Listodo from "./TodoApp/Listtodo";
import Nav from "./nav/Nav.js";
import Home from "./ex/Home";
import ListUser from "./User/ListUser.js";
import DetailUser from "./User/DetailUser.js";
import { ToastContainer, toast } from "react-toastify";
import { Route } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes } from "react-router-dom";
//component dạng hàm
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Listodo />} />
            <Route path="/hello" element={<Hello />} />
            <Route path="/user" exact element={<ListUser />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
/**
 * 2 loại component chính:
 * class component và function component (function(),arrow function)
 */
