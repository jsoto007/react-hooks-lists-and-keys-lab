import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkList = links.map((item) => {
    return <a key={item} href={"#"+item}>{item}</a>
  })

  return <nav>
    {linkList}
    </nav>;
}

export default NavBar;
