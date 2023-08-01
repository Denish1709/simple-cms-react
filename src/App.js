import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ManagePosts from "./pages/manage-posts";
import ManagePostAdd from "./pages/manage-posts-add";
import ManagePostEdit from "./pages/manage-posts-edit";
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
        <Route path="/manage-posts-edit" element={<ManagePostEdit />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
