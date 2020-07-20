import Split from "split.js";
import Marked from "marked";

import css from "../styles/layout.css";

Split(["#chat", "#wiki"]);

function renderWiki(file) {
  let wiki = document.getElementById("wiki");
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        wiki.innerHTML = Marked(rawFile.responseText);
      }
    }
  };
  rawFile.send(null);
}

renderWiki("static/assets/template.md");

function drawText(text) {
  const chatElement = document.getElementById("chat");
  const messageElement = document.createElement("div");
  messageElement.innerHTML = text + "<br>";
  chatElement.appendChild(messageElement);
}
