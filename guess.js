const CorrectNumber = Math.floor(Math.random()*100 + 1);


let info =  document.querySelector('form');
let Chances = 10 ;
let prevGuess =[];

info.addEventListener('submit',(e) => {
    e.preventDefault()
    let GuessedNumber = Number(document.querySelector('#guess').value);
    validate(GuessedNumber);
    
})

let validate = (num) =>{
    if(num === '' || isNaN(num) || num<1 || num > 100)
    {  
       document.getElementById("message").innerText = "Enter a valid guess !!"
    }
    else
    {
       prevGuess.push(num)
       check(num);
       
       
    }
}

let check = (num) => {
    if(num == CorrectNumber)
    {
        document.getElementById("message").innerText = "Correct Guesss🥳🥳"
        endgame();
    }
    else if(Chances == 0)
    {
        endgame();
    }
    else
    {
        Chances-- ;
        console.log("step1")
        displayMessage(num);
    }
}

let displayMessage = (num) =>
{
    document.querySelector("#attempts").innerHTML = `Attempts left ${Chances}`;
    console.log("step2")
    document.querySelector("#pg").innerHTML = `[  ${prevGuess} ]` ;
    if(num<CorrectNumber)
    {
        document.getElementById("message").innerText = "Guess a bit higher.."
    }
    else if(num>CorrectNumber)
    {
        document.getElementById("message").innerText = "Guess a bit lower.."
    }

}


let endgame = () =>{

}