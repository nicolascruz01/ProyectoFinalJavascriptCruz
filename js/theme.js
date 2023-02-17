$("body").prepend('<div id = "titulo">Hotel Santa Cruz Bogota</div>');
$("#titulo").css({
    "width": '100%',
    "overflow": 'hidden',
    "background-color": '#252932',
    "margin-bottom": '20px',
    "color": '#f2f2f2',
    "float": 'left',
    "line-height": '100px',
    "font-size": '50px',
})
    .slideUp(500)
    .slideDown(500)




// themes

const theme1 = () => {
    $("body").css("background-color", "black")
    $("h2").css("color", "white")
    $("h1").css("color", "white")
    $("p").css("color", "white")
    $("td").css("color", "white")
    $("th").css("color", "white")
    $("label").css("color", "white")

    // almaceno el theme
    localStorage.setItem("theme", "dark")


}

const theme2 = () => {
    $("body").css("background-color", "#e9ecef")
    $("h2").css("color", "black")
    $("h1").css("color", "black")
    $("p").css("color", "black")
    $("td").css("color", "black")
    $("th").css("color", "black")
    $("label").css("color", "black")

    localStorage.setItem("theme", "light")
    
}

$("#theme").on("click", () => {
    if(localStorage.getItem("theme") == "dark"){
        theme2()

    }else{
        theme1()
    }


})