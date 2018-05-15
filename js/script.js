$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
});


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


window.onload = function () {
    //section offer
    var repairsButton = document.getElementById("repairs-button");
    var installationButton = document.getElementById("installation-button");
    var salesButton = document.getElementById("sales-button");
    var repairs = document.getElementById("repairs");
    var installation = document.getElementById("installation");
    var sales = document.getElementById("sales");


    salesButton.addEventListener("click", function () {
        showSection(salesButton, sales);
        hideSection(repairsButton, repairs);
        hideSection(installationButton, installation);
    });

    repairsButton.addEventListener("click", function () {
        showSection(repairsButton, repairs);
        hideSection(salesButton, sales);
        hideSection(installationButton, installation);
    });

    installationButton.addEventListener("click", function () {
        showSection(installationButton, installation);
        hideSection(repairsButton, repairs);
        hideSection(salesButton, sales);
    });

    //section brands

    var otherBrands = document.getElementById("other-brands");
    var buttonBrands = document.getElementById("button-brands");

    buttonBrands.addEventListener("click", function () {
        if (buttonBrands.innerText.toLowerCase === "Pokaż więcej marek".toLowerCase) {
            otherBrands.classList.remove("hidden");
            otherBrands.classList.add("shown");
            buttonBrands.innerText = "Ukryj więcej marek";
        }
        else {
            otherBrands.classList.add("hidden");
            otherBrands.classList.remove("shown");
            buttonBrands.innerText = "Pokaż więcej marek";
        }

    });




};


