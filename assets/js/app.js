window.addEventListener("DOMContentLoaded", () => {
    
    let titles = document.querySelectorAll("div.global-titles");

    titles.forEach((title) => {
        title.addEventListener("click", () => 
        {
            // Get the icon inside the title
            let icon = title.childNodes[1];
            
            // Change it
            icon.classList.toggle("fa-caret-right");
            icon.classList.toggle("fa-caret-down");

            // Toggle the none class on the sub-titles div
            title.nextElementSibling.classList.toggle("none");
        });
    });


    let back_to_top = document.getElementById("back-to-top");

    back_to_top.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 20) {
            back_to_top.style.display = "block";
        } else {
            back_to_top.style.display = "none";
        }
    };





});


