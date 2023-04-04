import "./Style/App.css";
// import Home from './components/Home';
// import Todo from './components/Todo';
import React from "react";
import CalendarPage from "./pages/Calendar";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";
import TodoPage from "./pages/TodoPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //    <div className="home">
    //         <Home />
    //     </div>
    //     <div className="todo">
    //         <Todo />
    //     </div>
    // <TodoPage />
    // </div>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
  );
}

export default App;
