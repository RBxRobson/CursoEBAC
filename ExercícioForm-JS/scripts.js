const form = document.getElementById("form");
const Name = document.getElementById("Name");
const age = document.getElementById("age");
const sonho = document.getElementById("sonho");
const targetAge = document.getElementById("targetAge");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const NameValue = Name.value;
    const ageValue = age.value;
    const sonhoValue = sonho.value;
    const targetAgeValue = targetAge.value;

    if (NameValue === "") {
        setErrorFor(Name, "O nome completo é obrigatório.");
    } else if (!fullName(NameValue)) {
        setErrorFor(Name, "O nome não esta completo.");
    }
    else {
        setSuccessFor(Name);
    }

    if (sonhoValue === "") {
        setErrorFor(sonho, "O sonho atual deve ser mencionado.");
    }
    else {
        setSuccessFor(sonho);
    }

    if (ageValue === "") {
        setErrorFor(age, "Sua idade é obrigatória.");
    }
    else {
        setSuccessFor(age);
    }

    if (targetAgeValue === "") {
        setErrorFor(targetAge, "A idade que deseja realizar o sonho é obrigatória.");
    }
    else if (targetAgeValue <= ageValue) {
        setErrorFor(targetAge, "A idade que deseja realizar o sonho deve ser maior que a sua atual.");
    }
    else {
        setSuccessFor(targetAge)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function fullName(fullName) {
    const nomeComoArray = fullName.split(' ');
    return nomeComoArray.length >= 2;
}

