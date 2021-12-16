import React from "react";
import { Container, Grid } from "@material-ui/core";
import PostList from "../Components/PostList";
import AddNewPost from "../Components/AddNewPost";
import Navi from "./Navi";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../Components/Register";
import Login from "../Components/Login";
import PostDetail from "../Components/PostDetail";
import Footer from "./Footer";
import AccountSettings from "../Components/AccountSettings/AccountSettings";
import UserPosts from "../Components/UserPosts";
import ProtectedRoute from "../Guard/ProtectedRoute";
import LoginRoute from "../Guard/LoginRoute";

const Dashboard = () => {
  return (
    <div>
      <Navi></Navi>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<PostList />} />
                <Route element={<LoginRoute />}>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                </Route>

                <Route path="/posts" element={<Navigate replace to="/" />} />
                <Route path="/:slug" element={<PostDetail />} />
                <Route path="/:username/posts" element={<UserPosts />} />

                <Route element={<ProtectedRoute />}>
                  <Route
                    path="/account/settings"
                    element={<AccountSettings />}
                  />
                  <Route path="/new-post" element={<AddNewPost />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
