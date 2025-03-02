const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

document.getElementById('time').innerText = formattedDate;

// Discover something....................................

document.getElementById('discover-btn').addEventListener('click',function(){
    window.location.href="blogs.html"
})

// Theme........................................................
const colors= ["pink", "purple", "orange","gray","green","black"]
let i = 0;
document.getElementById('theme').addEventListener('click', function(){
    document.getElementById('main-body').style.backgroundColor= colors[i];
    i=(i+1)%colors.length;
})


// Clear History........................................

document.getElementById('history-clear').addEventListener('click',function(){
    document.getElementById('p-1').style.display= 'none';
    document.getElementById('p-2').style.display= 'none';
    document.getElementById('p-3').style.display= 'none';
    document.getElementById('p-4').style.display= 'none';
    document.getElementById('p-5').style.display= 'none';
    document.getElementById('p-6').style.display= 'none';
})


// completed button..................................


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
// Dark mode button...............................................

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

// Optimize button,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

const optimizeTitle= document.getElementById('optimize-title')
document.getElementById('btn-3').addEventListener('click',function(){
    alert('Board updated Successfully.')
    document.getElementById('btn-3').style.backgroundColor= 'white';
    document.getElementById('btn-3').style.color= 'gray';
    document.getElementById('p-3').innerText='you have completed'+ ' '+ optimizeTitle.innerText+ ' '+ 'at' +' ' + getTime();
    document.getElementById('p-3').style.backgroundColor= '#e2e8f0';
    document.getElementById('p-3').style.fontSize= '14px';
    document.getElementById('p-3').style.padding= '5px';
    document.getElementById('p-3').style.borderRadius= '5px';
    document.getElementById('p-3').style.display= 'block';
    
})

// Emoji button---------------------------------------------------

const emojiTitle= document.getElementById('emoji-title')
document.getElementById('btn-4').addEventListener('click',function(){
    alert('Board updated Successfully.')
    document.getElementById('btn-4').style.backgroundColor= 'white';
    document.getElementById('btn-4').style.color= 'gray';
    document.getElementById('p-4').innerText='you have completed'+ ' '+ emojiTitle.innerText+ ' '+ 'at' +' ' + getTime();
    document.getElementById('p-4').style.backgroundColor= '#e2e8f0';
    document.getElementById('p-4').style.fontSize= '14px';
    document.getElementById('p-4').style.padding= '5px';
    document.getElementById('p-4').style.borderRadius= '5px';
    document.getElementById('p-4').style.display= 'block';
    
})

// Open ai button.............................................

const openTitle= document.getElementById('open-title')
document.getElementById('btn-5').addEventListener('click',function(){
    alert('Board updated Successfully.')
    document.getElementById('btn-5').style.backgroundColor= 'white';
    document.getElementById('btn-5').style.color= 'gray';
    document.getElementById('p-5').innerText='you have completed'+ ' '+ openTitle.innerText+ ' '+ 'at' +' ' + getTime();
    document.getElementById('p-5').style.backgroundColor= '#e2e8f0';
    document.getElementById('p-5').style.fontSize= '14px';
    document.getElementById('p-5').style.padding= '5px';
    document.getElementById('p-5').style.borderRadius= '5px';
    document.getElementById('p-5').style.display= 'block';
    
})

// Job button....................................................

const jobTitle= document.getElementById('job-title')
document.getElementById('btn-6').addEventListener('click',function(){
    alert('Board updated Successfully.');
    document.getElementById('btn-6').style.backgroundColor= 'white';
    document.getElementById('btn-6').style.color= 'gray';
    document.getElementById('p-6').innerText='you have completed'+ ' '+ jobTitle.innerText+ ' '+ 'at' +' ' + getTime();
    document.getElementById('p-6').style.backgroundColor= '#e2e8f0';
    document.getElementById('p-6').style.fontSize= '14px';
    document.getElementById('p-6').style.padding= '5px';
    document.getElementById('p-6').style.borderRadius= '5px';
    document.getElementById('p-6').style.display= 'block';
    
})
