'use strict'
const mq = window.matchMedia("(min-width: 1000px)")
const imgFirst = document.querySelectorAll('.future__img-mobile')


const linkDesktop = document.querySelectorAll('.link__desktop')
let prevMouseOver


const companyArea = document.querySelector(`.desktop__section-company`)
const companyAreaLink = document.querySelectorAll(`.desktop__section-company a`)

const connectArea = document.querySelector(`.desktop__section-connect`)
const connectAreaLink = document.querySelectorAll(`.desktop__section-connect a`)

const productArea = document.querySelector(`.desktop__section-product`)
const productAreaLink = document.querySelectorAll(`.desktop__section-product a`)

companyAreaLink.forEach(element => element.name = 'company')
connectAreaLink.forEach(element => element.name = 'connect')
productAreaLink.forEach(element => element.name = 'product')

document.querySelector('.dropdown__company').name = 'company'
document.querySelector('.dropdown__connect').name = 'connect'
document.querySelector('.dropdown__product').name = 'product'

companyArea.name = 'company'
connectArea.name = 'connect'
productArea.name = 'product'

document.querySelector('.dropdown__company').addEventListener('mouseover', mouseover)
document.querySelector('.dropdown__company').addEventListener('mouseout', mouseout)
document.querySelector('.dropdown__connect').addEventListener('mouseover', mouseover)
document.querySelector('.dropdown__connect').addEventListener('mouseout', mouseout)
document.querySelector('.dropdown__product').addEventListener('mouseover', mouseover)
document.querySelector('.dropdown__product').addEventListener('mouseout', mouseout)

companyArea.addEventListener('mouseover', mouseover)
companyArea.addEventListener('mouseout', mouseout)

connectArea.addEventListener('mouseover', mouseover)
connectArea.addEventListener('mouseout', mouseout)

productArea.addEventListener('mouseover', mouseover)
productArea.addEventListener('mouseout', mouseout)


if(mq.matches) {
    imgFirst[0].src = '../images/illustration-editor-desktop.svg'
    imgFirst[1].src = '../images/illustration-laptop-desktop.svg'
}
window.addEventListener('resize', ()=>{
    if(mq.matches) {

        imgFirst[0].src = '../images/illustration-editor-desktop.svg'
        imgFirst[1].src = '../images/illustration-laptop-desktop.svg'
    }
    else{
        imgFirst[0].src = '../images/illustration-editor-mobile.svg'
        imgFirst[1].src = '../images/illustration-laptop-mobile.svg'
    }
})



linkDesktop.forEach(element => {
    element.addEventListener('mouseover', mouseover)
    element.addEventListener('mouseout', mouseout)
})

function mouseover(e){
    try {
        prevMouseOver = e.target.name
    
        document.querySelector(`.icon__arrow-${prevMouseOver}`).style.animation = 'rotateOn .5s'
            setTimeout(()=>{
            document.querySelector(`.icon__arrow-${prevMouseOver}`).style.transform = 'rotate(180deg)'
            }, 500)
    } catch{}
}


function mouseout(e){
    try {
        document.querySelector(`.icon__arrow-${e.target.name}`).style.animation = 'rotateOff .5s'
            setTimeout(()=>{
                document.querySelector(`.icon__arrow-${e.target.name}`).style.transform = 'rotate(0deg)'
            }, 500)
    } catch{
        
    }
}


