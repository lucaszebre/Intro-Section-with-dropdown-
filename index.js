window.onload = function(){
    if (window.matchMedia("(max-width: 1000px)").matches) {
        /* La largeur minimum de l'affichage est 600 px inclus */
    // Nav Bar off canvas 
const opened  = document.querySelector(".canvas");
const closed= document.querySelector(".menu-close");
const offcanvas =document.querySelector(".off")
const corp = document.querySelector(".wrap")
closed.addEventListener("click", ()=>{
    // setTimeout(() => {
    //     offcanvas.style.display="none";
    // }, "220");
    offcanvas.style.display="none";
    offcanvas.style.width="0%";
    corp.style.filter="blur(0px)"

});

opened.addEventListener("click",() =>{
    // setTimeout(() => {
    //     offcanvas.style.display="block";
    // }, "220");
    offcanvas.style.display="block";
offcanvas.style.width="70%"
corp.style.filter="blur(1px)";
});



// Features Dropdown 
const feature = document.querySelector(".features");
const arrow1 = document.querySelector(".arrow1");
const Dropdown = document.querySelector(".expanded-feature")
let show=false

feature.addEventListener("click",(event)=>{
    if(event.target.id==="arrow1" || event.target.id==="feature"){
    if (!show ){
    arrow1.style.transform="rotate(180deg)"
    Dropdown.style.display="block"
    show=true
    }
    else{
        show=false
        arrow1.style.transform="rotate(360deg)"
        Dropdown.style.display="none"

    }
}
})

//Company Dropdown 
const company = document.querySelector(".company");
const arrow2 = document.querySelector(".arrow2");
const Dropdown2 = document.querySelector(".expanded-company");

let show2=false
company.addEventListener("click",(event)=>{
    console.log(event.target.id==="company")
    if(event.target.id==="arrow2" || event.target.id==="company"){
        if(!show2){
        arrow2.style.transform="rotate(180deg)"
        Dropdown2.style.display="block"
        show2=true
        }
        else{
            show2=false
        arrow2.style.transform="rotate(360deg)"
        Dropdown2.style.display="none"
        }
    }
})
    } else {
        /* L'affichage est inférieur à 600px de large */
        const opened  = document.querySelector(".canvas");
        const closed= document.querySelector(".menu-close");
        const offcanvas =document.querySelector(".off")
        const corp = document.querySelector(".wrap")
        closed.addEventListener("click", ()=>{
            setTimeout(() => {
        offcanvas.style.display="none";
    }, "220");
    offcanvas.style.display="none";
    corp.style.filter="blur(0px)"

});

opened.addEventListener("click",() =>{
    setTimeout(() => {
        offcanvas.style.display="block";
    }, "220");
offcanvas.style.display="flex"
corp.style.filter="blur(1px)";
});



// Features Dropdown 
const feature = document.querySelector(".features");
const arrow1 = document.querySelector(".arrow1");
const Dropdown = document.querySelector(".expanded-feature")
let show=false

feature.addEventListener("click",(event)=>{
    if(event.target.id==="arrow1" || event.target.id==="feature"){
    if (!show ){
    arrow1.style.transform="rotate(180deg)"
    Dropdown.style.display="block"
    show=true
    }
    else{
        show=false
        arrow1.style.transform="rotate(360deg)"
        Dropdown.style.display="none"

    }
}
})
feature.addEventListener("mouseover",(event)=>{
    if(event.target.id==="arrow1" || event.target.id==="feature"){
    if (!show ){
    arrow1.style.transform="rotate(180deg)"
    Dropdown.style.display="block"
    show=true
    }
    else{
        show=false
        arrow1.style.transform="rotate(360deg)"
        Dropdown.style.display="none"

    }
}
})

//Company Dropdown 
const company = document.querySelector(".company");
const arrow2 = document.querySelector(".arrow2");
const Dropdown2 = document.querySelector(".expanded-company");

let show2=false
company.addEventListener("click",(event)=>{
    console.log(event.target.id==="company")
    if(event.target.id==="arrow2" || event.target.id==="company"){
        if(!show2){
        arrow2.style.transform="rotate(180deg)"
        Dropdown2.style.display="block"
        show2=true
        }
        else{
            show2=false
        arrow2.style.transform="rotate(360deg)"
        Dropdown2.style.display="none"
        }
    }
})

company.addEventListener("mouseover",(event)=>{
    console.log(event.target.id==="company")
    if(event.target.id==="arrow2" || event.target.id==="company"){
        if(!show2){
        arrow2.style.transform="rotate(180deg)"
        Dropdown2.style.display="block"
        show2=true
        }
        else{
            show2=false
        arrow2.style.transform="rotate(360deg)"
        Dropdown2.style.display="none"
        }
    }
})
    }



}
