
function cssPicker()
{
    var storeCss = document.getElementById("style").href;
    if ( storeCss.match("CssButton.css") )
    {
        document.getElementById("style").setAttribute("href","ButtonHtml.css")
        localStorage.setItem("style","ButtonHtml.css");
    }    
    else 
    {
        document.getElementById("style").setAttribute("href","CssButton.css")
        localStorage.setItem("style","CssButton.css");
    }

}



window.onload = function() {
    if(localStorage.getItem("style") === null)
        {
        document.getElementById("style").href = "CssButton.css";
        }
    else
    {
        document.getElementById("style").href = localStorage.getItem("style");

    }
  }

// let  div = document.querySelector('.divDefault');
// let  background = document.querySelector('.parent');
// let  overlay = document.querySelector('.circle');
// let  reset = document.querySelector('.switchHtml');
// // let header = document.querySelector(.)

// btn.addEventListener('click', ()=>
// {
//     div.classList.remove(".divDefault");
//     background.classList.remove(".parent");
//     overlay.classList.remove(".circle");
//     reset.classList.add(".switchHtml");

// }
// );