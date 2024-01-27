let timeNow = new Date()
let clockTime = timeNow.toLocaleTimeString()
document.getElementById('tiime').innerHTML = clockTime ;
setInterval(function() {
    let timeNow = new Date()
    let clockTime = timeNow.toLocaleTimeString()
    document.getElementById('tiime').innerHTML = clockTime ;
}, 1000)

