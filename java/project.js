const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

document.getElementById('time').innerText = formattedDate;

// Discover something
document.getElementById('discover-btn').addEventListener('click',function(){
    window.location.href="blogs.html"
})

// Theme......
const colors= ["pink", "purple", "orange","gray","green","black"]
let i = 0;
document.getElementById('theme').addEventListener('click', function(){
    document.getElementById('main-body').style.backgroundColor= colors[i];
    i=(i+1)%colors.length;
})
// Clear History...
document.getElementById('history-clear').addEventListener('click',function(){
    document.getElementById('p-1').style.display= 'none';
    document.getElementById('p-2').style.display= 'none';
})


// completed button...


const fixTitle= document.getElementById('fix-title')
document.getElementById('btn-1').addEventListener('click',function(){
    alert('Board updated Successfully.')
    document.getElementById('btn-1').style.backgroundColor= 'white';
    document.getElementById('btn-1').style.color= 'gray';
    document.getElementById('p-1').innerText='you have completed'+ ' '+ fixTitle.innerText+ ' '+ 'at' +' ' + getTime();
    document.getElementById('p-1').style.backgroundColor= '#e2e8f0';
    document.getElementById('p-1').style.fontSize= '14px';
    document.getElementById('p-1').style.padding= '5px';
    document.getElementById('p-1').style.borderRadius= '5px';
    document.getElementById('p-2').style.display= 'block';
    
    
})

const darkTitle= document.getElementById('dark-title')
document.getElementById('btn-2').addEventListener('click',function(){
    alert('Board updated Successfully.')
    document.getElementById('btn-2').style.backgroundColor= 'white';
    document.getElementById('btn-2').style.color= 'gray';
    document.getElementById('p-2').innerText='you have completed'+ ' '+ darkTitle.innerText+ ' '+ 'at' +' ' + getTime();
    document.getElementById('p-2').style.backgroundColor= '#e2e8f0';
    document.getElementById('p-2').style.fontSize= '14px';
    document.getElementById('p-2').style.padding= '5px';
    document.getElementById('p-2').style.borderRadius= '5px';
    document.getElementById('p-2').style.display= 'block';
    
})