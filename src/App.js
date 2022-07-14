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
        <Route path="/assignments" element={<UserRoute><Assignments/></UserRoute>} />
        <Route path="/discussions" element={<UserRoute><Discussions/></UserRoute>} />
        <Route path="/electives" element={<UserRoute><Electives /></UserRoute>} />
        <Route path="/lectures" element={<UserRoute><Lectures /></UserRoute>} />
        <Route path="/notifications" element={<UserRoute><Notifications /></UserRoute>} />
        <Route path="/quizzes" element={<UserRoute><Quizzes /></UserRoute>} />
        <Route path="/tickets" element={<UserRoute><Tickets /></UserRoute>} />
      </Routes>
    </div>
  );
}

export default App;
