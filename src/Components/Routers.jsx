import {Routes, Route} from "react-router-dom";
import {Masai} from "./Masai";
import {Assignments} from "./Assignments";
import {Discussions} from "./Discussions";
import {Electives} from "./Electives";
import { Lectures } from "./Lectures";
import {Notifications} from "./Notifications";
import {Quizzes} from "./Quizzes";
import {Tickets} from "./Tickets";

export const Routers = () => {
    return (
        <>
        <Routes>
           <Route path="/" element={<Masai />} />
           <Route path="/assignments" element={<Assignments />} />
           <Route path="/discussions" element={<Discussions />} />
           <Route path="/electives" element={<Electives />} />
           <Route path="/lectures" element={<Lectures />} />
           <Route path="/notifications" element={<Notifications />} />
           <Route path="/quizzes" element={<Quizzes />} />
           <Route path="/tickets" element={<Tickets />} />
        </Routes>
        </>
    )
}