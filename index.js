import { authors } from "./utils/authors.js";

import Header from "./components/Header/Header.js";
import Card from "./components/Card/Card.js";

/** Get root element */

const root = document.querySelector("#root");

const header = Header();

root.append(header);

authors.forEach((author) => {
  const card = Card(author);

  root.append(card);
});
