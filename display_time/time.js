function time(){
    t=  new Date();
    console.log(t);
    document.getElementById('time').innerHTML = t ; 
}

// set time interval to diaply per second 
setInterval(time,1000);