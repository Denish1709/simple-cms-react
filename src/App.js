import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ManagePosts from "./pages/manage-posts";
import ManagePostAdd from "./pages/manage-posts-add";
import ManagePostEdit from "./pages/manage-posts-edit";
import ManageUsers from "./pages/manage-users";
import ManageUsersAdd from "./pages/manage-users-add";
import ManageUserEdit from "./pages/manage-users-edit";
import Post from "./pages/post";

/*
  / -> home
  /dashboard -> Dashboard
  /manage-posts -> ManagePosts
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-posts" element={<ManagePosts />} />
        <Route path="/manage-posts-add" element={<ManagePostAdd />} />
        <Route path="/manage-posts-edit/:id" element={<ManagePostEdit />} />
        <Route path="./manage-posts" element={<ManagePosts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-users-add" element={<ManageUsersAdd />} />
        <Route path="/manage-users-edit/:id" element={<ManageUserEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
