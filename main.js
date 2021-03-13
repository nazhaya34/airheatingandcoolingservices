var firebaseConfig = {
    apiKey: "AIzaSyCdSxZ0M1NwzOngE8E0bh0uONESHASqgkY",
    authDomain: "masterduct-2caa6.firebaseapp.com",
    databaseURL: "https://masterduct-2caa6.firebaseio.com",
    projectId: "masterduct-2caa6",
    storageBucket: "masterduct-2caa6.appspot.com",
    messagingSenderId: "186846805876",
    appId: "1:186846805876:web:2aee5a427ae41e66c7f621",
    measurementId: "G-CF1Z597PY3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}