import React from "react";

const Header = () => {
  console.log("renderizou");
  return (
    <div>
      <h1>Header Aqui</h1>
    </div>
  );
};

export default React.memo(Header);
