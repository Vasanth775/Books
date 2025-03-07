// Selecting popup box, popup overlay, and add button

var popupoverlay = document.querySelector('.popup-overlay');
var popupbox = document.querySelector('.popup-box');
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener('click', function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Selecting cancel button

var cancelbutton = document.getElementById("cancel-popup");

cancelbutton.addEventListener('click', function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Selecting form container, add-book button, and input fields

var container = document.querySelector('.container');
var addbook = document.getElementById('add-book');
var booktitleinput = document.getElementById('book-title-input');
var bookauthorinput = document.getElementById('book-author-input');
var bookdescriptioninput = document.getElementById('book-description-input');
var bookimageinput = document.getElementById('book-image-input');

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "books-container");
    div.innerHTML = `
        <img src="${bookimageinput.value}" alt="${booktitleinput.value}">
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="delete-button">Delete</button>
    `;
    container.appendChild(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear input fields after adding the book
    booktitleinput.value = '';
    bookauthorinput.value = '';
    bookdescriptioninput.value = '';
    bookimageinput.value = '';

    // Add event listener to the delete button
    var deleteButton = div.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        container.removeChild(div);
    });
});