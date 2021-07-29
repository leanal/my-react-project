import React from "react";

function Header1({ loggedIn, handleLoggedInClick , handleCounterClick , fontSize}) {
  return (
      <div>
    <button onClick={handleLoggedInClick}>
      {loggedIn ? "Log Out" : "Log In"}
    </button>
    <button onClick={handleCounterClick}>
      Increase Font Size: {fontSize}    
    </button>
          </div>
  );
}

export default Header1;
