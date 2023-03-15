function efffect()
{
    document.getElementById("h1").style.transform="translate(5vw,0vh)"
    document.getElementById("h1").style.color="white"
    document.getElementById("h1").style.transition="transform 0.5s,color 0.5s"

    document.getElementById("h2").style.transform="translate(5vw,0vh)"
    document.getElementById("h2").style.color="white"
    document.getElementById("h2").style.transition="transform 0.5s,color 0.5s"

    document.getElementById("h4").style.transform="translate(0vw,-20vh)"
    document.getElementById("h4").style.color="white"
    document.getElementById("h4").style.transition="transform 0.5s,color 0.5s"

    document.getElementById("h3").style.transform="translate(0vw,-34vh)"
    document.getElementById("h3").style.color="white"
    document.getElementById("h3").style.transition="transform 0.5s,color 0.5s"

    document.getElementById("hexa").style.backgroundColor="white"
    document.getElementById("v").style.color="black"

}
 var a=setTimeout(efffect,500)
 function hoverv()
 {
    document.getElementById("hexa").style.backgroundColor="white"
    document.getElementById("v").style.color="black"
 }
 function unhover()
 {
    document.getElementById("hexa").style.backgroundColor="black"
    document.getElementById("v").style.color="white"
 }