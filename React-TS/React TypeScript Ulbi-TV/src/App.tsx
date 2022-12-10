import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./components/Home";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/users"}>Users</NavLink>
                <NavLink to={"/todos"}>Todos</NavLink>
            </div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/users"} element={<UsersPage/>}/>
                <Route path={"/todos"} element={<TodosPage/>}/>
                <Route path={"/user/"} element={<UserItemPage/>}>
                    <Route path=":id" element={null}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
