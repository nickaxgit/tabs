"use strict"

function hidePanels(){
    let panels=document.getElementsByClassName("panel")
    for(let i=0;i<panels.length;i++){
        panels[i].style.display="none" //visibility property too 
    }
}

function showPanel(pid){

    hidePanels()
    let panel = document.getElementById(pid)
    panel.style.display="block"  //Makes a panel visible

}

hidePanels()
showPanel("panel1")
















