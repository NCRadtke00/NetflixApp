import LoginScreen from "../components/LoginScreen/LoginScreen";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import ProfileScreen from "../components/ProfileScreen/ProfileScreen";
import React from "react";

type Routes = {
    [key: string]:{
        path: string;
        page: JSX.Element;
        isProtected: boolean;
    };
};
export const ROUTES: Routes = {
    HomeScreen: {path: '/', page: <HomeScreen />, isProtected: true},
    LoginScreen: {path: '/', page: <LoginScreen />, isProtected: false},
    ProfileScreen: {path: '/', page: <ProfileScreen />, isProtected: true}
};