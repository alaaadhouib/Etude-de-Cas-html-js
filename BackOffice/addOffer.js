//parie1
function validerFormulaire() {
   
    const title = document.getElementById('title').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('ddate').value;
    const returnDate = document.getElementById('rdate').value;
    const price = document.getElementById('price').value;

    if (title.length < 3) {
        alert("The title must contain at least 3 characters.");
        return false;
    }
    const destinationPattern = /^[A-Za-z\s]{3,}$/;
    if (!destinationPattern.test(destination)) {
        alert("The destination must contain only letters and spaces, and be at least 3 characters long.");
        return false;
    }
    if (new Date(returnDate) <= new Date(departureDate)) {
        alert("The return date must be later than the departure date.");
        return false;
    }
    if (price <= 0) {
        alert("The price must be a positive number.");
        return false;
    }

    alert("Form is valid!");
    return true;
}


//partie2
document.getElementById('offerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const title = document.getElementById('title').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('ddate').value;
    const returnDate = document.getElementById('rdate').value;
    const price = document.getElementById('price').value;
    if (title.length < 3) {
        displayError('title', 'The title must contain at least 3 characters.');
        return;
    } else {
        displaySuccess('title');
    }
    const destinationPattern = /^[A-Za-z\s]{3,}$/;
    if (!destinationPattern.test(destination)) {
        displayError('destination', 'The destination must contain only letters and spaces, and be at least 3 characters long.');
        return;
    } else {
        displaySuccess('destination');
    }
    if (new Date(returnDate) <= new Date(departureDate)) {
        displayError('rdate', 'The return date must be later than the departure date.');
        return;
    } else {
        displaySuccess('rdate');
    }
    if (price <= 0) {
        displayError('price', 'The price must be a positive number.');
        return;
    } else {
        displaySuccess('price');
    }
    alert("Form is successfully submitted!");
});

function displayError(inputId, message) {
    const inputField = document.getElementById(inputId);
    inputField.style.borderColor = "red";
    
    let errorMessage = inputField.nextElementSibling;
    if (!errorMessage || errorMessage.className !== "error") {
        errorMessage = document.createElement("span");
        errorMessage.className = "error";
        inputField.after(errorMessage);
    }
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
}

function displaySuccess(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.style.borderColor = "green";
    
    let successMessage = inputField.nextElementSibling;
    if (successMessage && successMessage.className === "error") {
        successMessage.remove(); 
    }
}
// partie3

document.getElementById('title').addEventListener('keyup', function() {
    const title = document.getElementById('title').value;
    if (title.length < 3) {
        displayError('title', 'The title must contain at least 3 characters.');
    } else {
        displayCorrect('title');
    }
});

document.getElementById('destination').addEventListener('keyup', function() {
    const destination = document.getElementById('destination').value;
    const destinationPattern = /^[A-Za-z\s]{3,}$/;
    if (!destinationPattern.test(destination)) {
        displayError('destination', 'The destination must contain only letters and spaces, and be at least 3 characters long.');
    } else {
        displayCorrect('destination');
    }
});

// fonctions pour faciliter
function displayError(inputId, message) {
    const inputField = document.getElementById(inputId);
    inputField.style.borderColor = "red";
    
    let messageSpan = inputField.nextElementSibling;
    if (!messageSpan || messageSpan.className !== "error") {
        messageSpan = document.createElement("span");
        messageSpan.className = "error";
        inputField.after(messageSpan);
    }
    messageSpan.textContent = message;
    messageSpan.style.color = "red";
}

function displaySuccess(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.style.borderColor = "green";
    
    let successMessage = inputField.nextElementSibling;
    if (successMessage && successMessage.className === "error") {
        successMessage.remove();
    }
}

function displayCorrect(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.style.borderColor = "green";
    
    let correctMessage = inputField.nextElementSibling;
    if (!correctMessage || correctMessage.className !== "correct") {
        correctMessage = document.createElement("span");
        correctMessage.className = "correct";
        inputField.after(correctMessage);
    }
    correctMessage.textContent = "Correct";
    correctMessage.style.color = "green";
}
