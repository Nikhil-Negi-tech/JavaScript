const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id=='grey'){
            body.style.backgroundColor = 'grey'
        }
        if(event.target.id=='white'){
            body.style.backgroundColor = 'white'
        }
        if(event.target.id=='blue'){
            body.style.backgroundColor = 'blue'
        }
        if(event.target.id=='yellow'){
            body.style.backgroundColor = 'yellow'
        }
        if(event.target.id=='green'){
            body.style.backgroundColor = 'green'
        }
        if(event.target.id=='red'){
            body.style.backgroundColor = 'red'
        }
    })
})