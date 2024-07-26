import React, { useEffect } from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useRecoilState } from "recoil";
import { viewAtom } from "./store/atoms";

function App() {
  const [view, setView] = useRecoilState(viewAtom);

  useEffect(() => {
    
  }, [])

  return (
    <div className="App">
      {view == "signup" ? <SignUp /> : view == "signin" ? <SignIn /> : <Home />}
    </div>
  );
}

export default App;
