// Electron
const { ipcRenderer } = require("electron");

// Navbar -------------------------------
// quit
const quit = document.getElementById("quit");
quit.addEventListener("click", () => {
  ipcRenderer.send("quit", "close");
});

// Minimize
const minimize = document.getElementById("minimize");
minimize.addEventListener("click", () => {
  ipcRenderer.send("minimize", "hidden");
});

// full screen fs = full screen
const fs = document.getElementById("fs");

fs.addEventListener("click", ()=>{
    ipcRenderer.send("fs")
})
