function fun()
{
    var a=document.getElementById("ab").value
    localStorage.setItem("mobile",a)
}
function fun3()
{
    var pass=document.getElementById("ac").value
    localStorage.setItem("password",pass)
}
function fun4()
{
    var pass=12345
    var pass1=localStorage.getItem("password")
    var mobile1=7288966676
    var mobile=localStorage.getItem("mobile")
    if(pass==pass1&&mobile1==mobile)
    {
        document.getElementById("ac").style.borderColor="green"
        document.getElementById("ab").style.borderColor="green"
        document.getElementById("main2").style.backgroundImage="linear-gradient(green,green)"
        document.getElementById("from").setAttribute("action","./project2/projectnew.html")
        document.getElementById("main").style.backgroundImage="linear-gradient(green,green)"
    }
    else if(pass!=pass1&&mobile1!=mobile)
    {
        document.getElementById("ac").style.borderColor="red"
        document.getElementById("main2").style.backgroundImage="linear-gradient(crimson,red)"
        document.getElementById("ab").style.borderColor="red"
        document.getElementById("main").style.backgroundImage="linear-gradient(crimson,red)"
    }
    else if(pass!=pass1)
    {
        document.getElementById("ac").style.borderColor="red"
        document.getElementById("main2").style.backgroundImage="linear-gradient(rgb(175, 7, 7),blueviolet)"
    }
    else if(mobile1!=mobile)
    {
        document.getElementById("ab").style.borderColor="red"
        document.getElementById("main").style.backgroundImage="linear-gradient(rgb(175, 7, 7),blueviolet)"
    }
}
function passvisible()
{
    var pass1=localStorage.getItem("password")
    document.getElementById("img").setAttribute("src","./pngegg (1).png")
    document.getElementById("ac").removeAttribute("type")
    document.getElementById("img").style.transform="rotateY(360deg)"
    document.getElementById("img").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("img").setAttribute("src","./pngegg.png")
    document.getElementById("ac").setAttribute("type","password")
    document.getElementById("img").style.transform="rotateY(-360deg)"
    document.getElementById("img").style.transition="transform -0.3s"
}