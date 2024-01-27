let info = document.querySelector('.form')
document.querySelector('body').style.backgroundColor = 'lightgray'

info.addEventListener('submit', (e)=>{
    e.preventDefault()
    let height = Number(document.querySelector("#height").value)
    let weight = Number(document.querySelector("#weight").value)
    let result = (weight/(height*height)).toFixed(2);
    document.getElementById('result').innerHTML = `The bmi is ${result}`
})