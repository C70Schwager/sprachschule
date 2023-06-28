function validateForm() {
    if (!validateFirstName()) return false;
    if (!validateName()) return false;

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

//--------------------------------------------------------------------------------------------------------

function generateConfirmation() {
    // Vornamen einfüllen  (in <span> Tag)
    document.getElementById("first name").innerText = sessionStorage.getItem("first name");

    // Namen einfüllen ...
}


