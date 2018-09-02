
$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                autoplaySpeed: 3000
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                autoplaySpeed: 2000
            }
        }
    ]
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
    var reg = /^[0-9\+\- ]{8,13}$/;
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
    var successMessage = document.getElementById("success__message");

    buttonSubmit.addEventListener("click", function () {
        var listOfError = [];

        if (name.value == "") {
            listOfError.push("Imię jest wymagane!");
        }
        if (tel.value == "" && email.value == "") {
            listOfError.push("Telefon lub adres e-mail są wymagane!");
        }
        if (message.value == "") {
            listOfError.push("Wiadomość jest wymagana!");
        }
        if (email.value !== "" && validateEmail(email.value) == false) {
            listOfError.push("Niepoprawny format adresu e-mail!");
        }
        if (tel.value !== "" && validateTel(tel.value) == false) {
            listOfError.push("Niepoprawny format telefonu!");
        }

        validationResult.innerHTML = "";
        successMessage.innerHTML = "";


        for (var i = 0; i < listOfError.length; i++) {
            var currentError = listOfError[i];
            validationResult.innerHTML = validationResult.innerHTML + currentError + "<br>";
        }
        if (listOfError.length > 0) {
            validationResult.scrollIntoView();
        }

        if (listOfError.length == 0) {
            var url = "http://multiserw.pl/sendForm.php";
            var formData = {
                FirstName: name.value,
                Phone: tel.value,
                Email: email.value,
                Message: message.value
            };

            var request = $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                type: 'POST',
                url: url,
                data: JSON.stringify(formData),
                dataType: 'json'
            });

            request.done(function (data) {
                if (data.Success) {

                    validationResult.innerText = "";
                    name.value = "";
                    tel.value = "";
                    email.value = "";
                    message.value = "";

                    successMessage.innerText = "Wiadomość została wysłana";
                    successMessage.scrollIntoView();
                }
                else {
                    validationResult.innerText = "Błąd! " + data.Message;
                    validationResult.scrollIntoView();
                }
            });

            request.fail(function (jqXHR, textStatus, err2) {
                validationResult.innerText = "Błąd! " + err2;
                validationResult.scrollIntoView();
            });
        }



    });
};

$(document).ready(function () {

    function setCookie(name, value, expireDays) {
        var today = new Date();
        var expire = new Date();
        if (expireDays == null || expireDays == 0) expireDays = 1;
        expire.setTime(today.getTime() + 3600000 * 24 * expireDays);
        document.cookie = name + "=" + escape(value) + ((expire === null) ? "" : ("; expires=" + expire.toGMTString())) + "; path=/";
    }

    function checkCookie(name) {
        if (document.cookie !== "") {
            var toCookie = document.cookie.split("; ");
            for (i = 0; i < toCookie.length; i++) {
                var cookieName = toCookie[i].split("=")[0];
                if (cookieName == name)
                    return true;
            }
        }

        return false;
    }

    if (!checkCookie('cookie-accepted')) {
        $('.cookies-warning').show();
    }

    $('#accept-cookies-btn').click(function (e) {
        setCookie('cookie-accepted', 'yes', 14);
        $('.cookies-warning').fadeOut();
    });
});
