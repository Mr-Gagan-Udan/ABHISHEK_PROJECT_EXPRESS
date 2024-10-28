// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Add or update book
document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const genre = document.getElementById('bookGenre').value;
    const publishedDate = document.getElementById('bookPublishedDate').value;
    const availability = document.getElementById('bookAvailability').checked;

    const newBookKey = db.ref().child('books').push().key;
    db.ref('books/' + newBookKey).set({
        title,
        author,
        genre,
        publishedDate,
        availability
    });

    loadBooks(); // Refresh the book list
});

// Load books
function loadBooks() {
    db.ref('books').once('value', function(snapshot) {
        const booksList = document.getElementById('booksList');
        booksList.innerHTML = '';

        snapshot.forEach(function(childSnapshot) {
            const book = childSnapshot.val();
            const li = document.createElement('li');
            li.innerText = `${book.title} by ${book.author}`;
            booksList.appendChild(li);
        });
    });
}

// Add or update member
document.getElementById('memberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('memberName').value;
    const membershipDate = document.getElementById('membershipDate').value;
    const active = document.getElementById('memberActive').checked;

    const newMemberKey = db.ref().child('members').push().key;
    db.ref('members/' + newMemberKey).set({
        name,
        membershipDate,
        active
    });

    loadMembers(); // Refresh the members list
});

// Load members
function loadMembers() {
    db.ref('members').once('value', function(snapshot) {
        const membersList = document.getElementById('membersList');
        membersList.innerHTML = '';

        snapshot.forEach(function(childSnapshot) {
            const member = childSnapshot.val();
            const li = document.createElement('li');
            li.innerText = `${member.name} - ${member.membershipDate}`;
            membersList.appendChild(li);
        });
    });
}

// Initial load
window.onload = function() {
    loadBooks();
    loadMembers();
};
