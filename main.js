let select = document.querySelectorAll('.button')

select.forEach((selec)=> {

    selec.addEventListener('click' , (e)=>{
        console.log(e.target.id)
        if(e.target.id == 'changer')
        {
            window.open(`./${e.target.id}.html`,'_self')
        }
        else if(e.target.id == 'bmi')
        {
            window.open(`./${e.target.id}.html`,'_self')
        }
        else if(e.target.id == 'clock')
        {
            window.open(`./${e.target.id}.html`,'_self')
        }
        else if(e.target.id == 'guess')
        {
            window.open(`./${e.target.id}.html`,'_self')
        }
    
    })

})