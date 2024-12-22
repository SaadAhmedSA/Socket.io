import {io} from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js"

const socket = io("http://localhost:3000")
socket.on('connect',() => {
    console.log("connected with server");
    
})
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ul = document.querySelector("ul");

const arr = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  socket.emit("message", input.value);
});

socket.on("message", (msg) => {
  arr.push(msg);
  console.log( msg);
  ul.innerHTML = "";
  arr.map((item) => {
    ul.innerHTML += `<li>${item}</li>`;
  });
});