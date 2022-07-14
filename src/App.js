import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Assignments } from './Components/Assignments';
import { Discussions } from './Components/Discussions';
import { Electives } from './Components/Electives';
import { Lectures } from './Components/Lectures';
import { Notifications } from './Components/Notifications';
import { Quizzes } from './Components/Quizzes';
import { Tickets } from './Components/Tickets';
import { Masai } from './Components/Masai';
import PrivateRoute from './Components/PrivateRoute';
import UserRoute from './Components/UserRoute';
// import UserRoute from './Components/UserRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<PrivateRoute />} > */}
        <Route path="/" element={<UserRoute><Home/></UserRoute>} />
        {/* </Route> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route exact path="/" element={<Masai />} /> */}
        <Route path="/assignments" element={<Assignments/>} />
        <Route path="/discussions" element={<Discussions/>} />
        <Route path="/electives" element={<Electives />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
