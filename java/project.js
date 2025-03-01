const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

document.getElementById('time').innerText = formattedDate;

// Discover something
document.getElementById('discover-btn').addEventListener('click',function(){
    window.location.href="blogs.html"
})

// Back to desk.
document.getElementById('back-btn').addEventListener('click',function(){
    window.location.href="index.html"
    
})

