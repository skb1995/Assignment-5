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



