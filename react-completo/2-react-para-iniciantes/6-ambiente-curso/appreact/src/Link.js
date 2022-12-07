import React from "react";

function Link({ url, nome }) {
  return (
    <li>
      <a href={url}>{nome}</a>
    </li>
  );
}

export default Link;
