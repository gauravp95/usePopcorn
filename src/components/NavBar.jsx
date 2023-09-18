import { React, useState } from "react";
import Search from "../components/Search";
import Logo from "../components/Logo";
import NumResults from "../components/NumResults";

const NavBar = () => {
  const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
};

export default NavBar;
