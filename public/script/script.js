const {ipcRenderer} = require("electron")

function shareData(){
    ipcRenderer.send('fullscreen', false)
}

// Navbar -------------------------------
// quit
const quit = document.getElementById("quit");
quit.addEventListener("click", ()=>{
    ipcRenderer.send("quit", "close")
})

// Minimize
const minimize = document.getElementById("minimize");
minimize.addEventListener("click", ()=>{
    ipcRenderer.send("minimize", 'hidden')
})