import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Button } from "./components/ui/button";

export default function Layout() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Navbar />

      <p>Counter is: {counter}</p>
      <Button onClick={() => setCounter((prev) => prev + 1)}>
        Increment Counter
      </Button>

      <Outlet />
      <Footer />
    </>
  );
}