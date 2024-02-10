import React from "react";

export const auth = {
    isAuth: false,
    name: 'Zakuan'
}

export const StudentContext = React.createContext('student');
export const OtherContext = React.createContext({ other: 'myother'})
export const AppContext = React.createContext('app');
