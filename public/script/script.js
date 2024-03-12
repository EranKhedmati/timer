const {ipcRenderer} = require("electron")

function shareData(){
    ipcRenderer.send('fullscreen', false)
}