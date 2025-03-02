function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let bela;
    if (hours >= 12) {
    bela = "PM";
    } else {
    bela = "AM";
    }

    if (hours === 0) {
        hours = 12; 
    } else if (hours > 12) {
        hours = hours - 12; 
    }

    return `${hours}:${minutes}:${seconds} ${bela}`;
}


// Decrease number & increase number & Final alert............

document.querySelectorAll('.complete-btn').forEach(button => {
    button.addEventListener('click',function(){
        let numElement = document.getElementById('number-1');
        let currentNum = parseInt(numElement.innerText);
        let numElement2 = document.getElementById('number-2');
        let currentNum2 = parseInt(numElement2.innerText);

        if(currentNum > 0){
            numElement.innerText = currentNum-1;
        }

        if(currentNum2 > 0){
            numElement2.innerText=currentNum2+1;
        }
        if(currentNum===1){
            alert('congrats!!! You have completed all the current task');
        }
    })
})
