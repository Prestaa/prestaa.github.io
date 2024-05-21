window.addEventListener("DOMContentLoaded", () => {
    
    let carrets = document.querySelectorAll("i.caret");

    carrets.forEach((carret) => {
        carret.addEventListener("click", () => 
        {
            let div_with_content = carret.parentElement.nextElementSibling;
            div_with_content.classList.toggle("none");
            
            carret.classList.toggle("fa-caret-right");
            carret.classList.toggle("fa-caret-down");
        
        });
    });

});