
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

//weryfikacja maila

function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email))
        return false;
    else
        return true;
}

//weryfikacja telefon
function validateTel(tel) {
    var reg = /^[0-9\+]{8,13}$/;
    if (!reg.test(tel))
        return false;
    else
        return true;
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
        if (buttonBrands.innerText.toLowerCase() === "Pokaż więcej marek".toLowerCase()) {
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
    // contact section


    var name = document.getElementById("firstname");
    var tel = document.getElementById("telephone");
    var email = document.getElementById("mail");
    var message = document.getElementById("message");

    var buttonSubmit = document.getElementById("button-submit");
    var validationResult = document.getElementById("validation-result");

    buttonSubmit.addEventListener("click", function () {
        if (name.value == "") {
            validationResult.innerText = "Proszę uzupełnić imię!!!";
        }
        else if (tel.value == "" && email.value == "") {
            validationResult.innerText = "Proszę uzupełnić telefon lub maila!!!";
        }
        else if (message.value == "") {
            validationResult.innerText = "Proszę uzupełnić wiadomość!!!";
        }

        else if (validateEmail(email.value) == false && tel.value == "") {
            validationResult.innerText = "Błedny format Magda   e-maila";
        }
        else if (validateTel(tel.value) == false && email.value == "") {
            validationResult.innerText = "Błedny format telefonu";
        }
        else {
            validationResult.innerText = "";
            name.value = "";
            tel.value = "";
            email.value = "";
            message.value = "";
        }

    });

};