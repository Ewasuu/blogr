'use strict'
const btn = document.getElementById('btn')
const menu = document.querySelector('.links__mobile-section')
const link = document.querySelectorAll('.link__mobile')
const bImg = document.getElementById('bImage')
let flag = 0
let elemento, prevElemento, prevName
let open = false
btn.addEventListener('click' ,()=>{
    if(flag === 0){
        btn.style.animation = 'change 1s linear'

        setTimeout(()=>{
            bImg.src = '../images/icon-close.svg'
        }, 1000)

        menu.style.display = 'flex'
        menu.style.animation = 'crecer 1.3s'
        flag = 1
    }
    else{
        menu.style.animation = 'cerrar 1.3s'
        btn.style.animation = 'changeback 1s linear'
        setTimeout(()=>{
            bImg.src = '../images/icon-hamburger.svg'
        }, 1000)
        setTimeout(()=>{
            menu.style.display = 'none'
        }, 1300)
        flag = 0
    }
})
link.forEach(element => {
    element.addEventListener('click', (e)=>{
        if(!open && !prevName){
            document.querySelector(`.icon__arrow-${e.target.name}`).style.animation = 'rotateOn .5s'
            setTimeout(()=>{
            document.querySelector(`.icon__arrow-${e.target.name}`).style.transform = 'rotate(180deg)'
            }, 500)


            prevName = e.target.name
            elemento = document.querySelector(`.extra__section-${e.target.name}`)


            elemento.style.animation = 'slidein .6s'
            prevElemento = elemento
            elemento.style.display = 'flex'
            menu.style.height = 'auto'
            open = true
        }
        else if(e.target.name === prevName){
            document.querySelector(`.icon__arrow-${prevName}`).style.animation = 'rotateOff .5s'
            setTimeout(()=>{
                document.querySelector(`.icon__arrow-${prevName}`).style.transform = 'rotate(0deg)'
                prevName = false
                open = false
            }, 500)

            elemento.style.animation = 'slideout .6s'
            setTimeout(()=>{
                elemento.style.display = 'none'
                menu.style.height = '30rem'
            }, 600)
        }
        else{
            try {
                document.querySelector(`.icon__arrow-${prevName}`).style.animation = 'rotateOff .5s'
                setTimeout(()=>{
                    document.querySelector(`.icon__arrow-${prevName}`).style.transform = 'rotate(0deg)'
                    prevName = e.target.name
                }, 500)
                prevElemento.style.display = 'none'

            } catch{}

            document.querySelector(`.icon__arrow-${e.target.name}`).style.animation = 'rotateOn .5s'
            setTimeout(()=>{
            document.querySelector(`.icon__arrow-${e.target.name}`).style.transform = 'rotate(180deg)'
            }, 500)
            elemento = document.querySelector(`.extra__section-${e.target.name}`)
            prevElemento = elemento
            elemento.style.animation = 'slidein .6s'
            elemento.style.display = 'flex'
            menu.style.height = 'auto'
        }
        
    })
})

