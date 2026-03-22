// Intro Button
document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('intro').style.display='none';
    document.getElementById('mainContent').style.display='flex';
});

// Profile Modal
const modal = document.getElementById('modal');
const profileBtn = document.getElementById('profileBtn');
const closeBtn = document.getElementById('close');

profileBtn.addEventListener('click', ()=> {
    modal.classList.add('show');
});
closeBtn.addEventListener('click', ()=> {
    modal.classList.remove('show');
});

// Simple User Storage
let currentUser = null;
const users = JSON.parse(localStorage.getItem('users') || '{}');

// Register
document.getElementById('registerBtn').addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email && password){
        users[email] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Εγγραφή επιτυχής!');
        modal.classList.remove('show');
        currentUser = email;
        document.getElementById('profileName').textContent = currentUser;
    } else alert('Συμπλήρωσε email και κωδικό');
});

// Login
document.getElementById('loginBtn').addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(users[email] && users[email] === password){
        alert('Σύνδεση επιτυχής!');
        modal.classList.remove('show');
        currentUser = email;
        document.getElementById('profileName').textContent = currentUser;
    } else alert('Λάθος email ή κωδικός');
});

// Google (προσομοίωση)
document.getElementById('googleBtn').addEventListener('click', ()=>{
    alert('Σύνδεση με Google επιτυχής (προσομοίωση)');
    currentUser = 'google_user@gmail.com';
    document.getElementById('profileName').textContent = currentUser;
    modal.classList.remove('show');
});

// Κλικ στις καρτέλες
document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', ()=>{
        if(!currentUser){
            alert('Απαιτείται εγγραφή / σύνδεση!');
        } else {
            const links = {
                football: 'https://hesgoalsports.com/',
                movie: 'https://tainio-mania.fun/'
            };
            const id = card.id;
            if(links[id]) window.open(links[id],'_blank');
        }
    });
});