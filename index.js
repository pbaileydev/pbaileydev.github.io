
function gitRepo() {
    window.location.href='https://github.com/pbaileydev?tab=repositories'
}
function googlePlay() {
    window.location.href='https://play.google.com/store/apps/developer?id=Phillip+Bailey'
}
function solar(){
    window.location.href='https://github.com/pbaileydev/SolarSystem'
}
function mathMania(){
    window.location.href='https://github.com/pbaileydev/MathMania'
}
const gitButton = document.getElementById("gitButton");
gitButton.addEventListener('mouseenter', e=>{
    gitButton.style.backgroundColor = "white";
});