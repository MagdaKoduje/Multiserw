// $('.slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });
function showSection(button, section) {
    section.classList.remove("hidden");
    section.classList.add("shown");
    button.classList.remove("inactive");
    button.classList.add("active");

}

function hideSection(button, section) {
    section.classList.remove("shown");
    section.classList.add("hidden");
    button.classList.remove("active");
    button.classList.add("inactive");
}


window.onload = function() {

    var repairsButton = document.getElementById("repairs-button");
    var installationButton = document.getElementById("installation-button");
    var salesButton = document.getElementById("sales-button");
    var repairs = document.getElementById("repairs");
    var installation = document.getElementById("installation");
    var sales = document.getElementById("sales");
    
    
    salesButton.addEventListener("click", function(){
        showSection(salesButton, sales);
        hideSection(repairsButton, repairs);
        hideSection(installationButton, installation);
    }); 

    repairsButton.addEventListener("click", function(){
        showSection(repairsButton, repairs);
        hideSection(salesButton, sales);
        hideSection(installationButton, installation);
    }); 

    installationButton.addEventListener("click", function(){
        showSection(installationButton, installation);
        hideSection(repairsButton, repairs);
        hideSection(salesButton, sales);
    }); 

};
