function validateForm() {
    if (!validateFirstName()) return false;
    if (!validateName()) return false;
    if (!validateDomicil()) return false;
    if (!validateCity()) return false;
    if (!validateCodePostal()) return false;
    if (!validateComent()) return false;

    return true; //Formular

}

function validateFirstName() {
    let value = document.getElementById("first name").value;

    if (value === "") { // 'single quotes'
        // Fehlerfall
        setMessage1("Bitte Feld ausfüllen.");
        return false;
    }
    sessionStorage.setItem("first name").value;

    return true; // korrekte Eingabe
}

function setMessage1(value) {
    document.getElementById(message-1).innerText = value;

}

function validateName() {
    let value = document.getElementById("name").value;

    if (value === "") { // 'single quote'
        // Fehlerfall
        setMessage1("Bitte Feld ausfüllen.");
        return false;
    }
    sessionStorage.setItem("name", value);
    return true; // korrekte Eingabe
}

function validateName() {
    let value = document.getElementById("domicil").value;

    if (value === "") { // 'single quote'
        // Fehlerfall
        setMessage1("Bitte Feld ausfüllen.");
        return false;
    }
    sessionStorage.setItem("domicil", value);
    return true; // korrekte Eingabe
}

function validateName() {
    let value = document.getElementById("city").value;

    if (value === "") { // 'single quote'
        // Fehlerfall
        setMessage1("Bitte Feld ausfüllen.");
        return false;
    }
    sessionStorage.setItem("city", value);
    return true; // korrekte Eingabe
}

function validateName() {
    let value = document.getElementById("code postal").value;

    if (value === "") { // 'single quote'
        // Fehlerfall
        setMessage1("Bitte Feld ausfüllen.");
        return false;
    }
    sessionStorage.setItem("code postal", value);
    return true; // korrekte Eingabe
}

function validateName() {
    let value = document.getElementById("comment").value;

    if (value === "") { // 'single quote'
        // Fehlerfall
        setMessage1("Bitte Feld ausfüllen.");
        return false;
    }
    sessionStorage.setItem("comment", value);
    return true; // korrekte Eingabe
}


function setMessage1(value) {
    document.getElementById(message-1).innerText = value;

}


//--------------------------------------------------------------------------------------------------------

function generateConfirmation() {
    // Vornamen einfüllen  (in <span> Tag)
    document.getElementById("first name").innerText = sessionStorage.getItem("first name");
    document.getElementById("name").innerText = sessionStorage.getItem("name");
    document.getElementById("domicil").innerText = sessionStorage.getItem("domicil");
    document.getElementById("city").innerText = sessionStorage.getItem("city");
    document.getElementById("code postal").innerText = sessionStorage.getItem("code postal");
    document.getElementById("coment").innerText = sessionStorage.getItem("coment");

    // Namen einfüllen ...
}


