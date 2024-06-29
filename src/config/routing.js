import React, { lazy, Suspense } from "react";

const AddUserPage = lazy(() => import("pages/User/AddUser"));
const UserListPage = lazy(() => import("pages/User/UserList"));

export const mainRoutes =  {
    "userList":{ "path": "/", "element": <UserListPage /> },
    "addUser":{ "path": "/add-user", "element": <AddUserPage /> }
}