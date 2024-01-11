import React from "react";
import LoginCard from "./login/components/LoginCard";
import TodoCard from "./mainpage/components/TodoCard";
import Header from "./mainpage/components/Header";

export default function App() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Header/>
    </div>
  );
}
