// dar mode



/* Design */
function darkMode() {
    const Selector = document.querySelector(".header img")
    const content = document.querySelector('.content')
    const text = document.querySelector(".text")
    const header = document.querySelector('.header')
    Selector.addEventListener('click', () => {
        document.body.classList.toggle('darkmode')
        text.classList.toggle("change")     
        content.classList.toggle('contentDark')
        header.classList.toggle('headerdark')

    })
}
darkMode()
//  content start code

let charse1 = '*// !@#$¨&*()_+_(&%#@!"!%¨&*(()):>^Ç^{+'
let charse0 = 'ywhnidopasdiiii31i20848923e4474asd56adasdyqgwt!@#kḱfadfa[´dadadadadad'
let charse = 'abcdfghijklmnopqrstuvwxyzABCDFGHIJKLMNOK87834023!@+"!#*2323 -2-34-5-5-5-5-55-5--66-6-6;;~][Ṕ'
const btn = document.querySelector('.btn')


// create a copy fucntion
const copy = document.querySelector(".copy")
copy.addEventListener("click", () => {
    product_final.value !== '' ? copy.innerHTML = `copied` : alert("Nothing to copy")
    navigator.clipboard.writeText(product_final.value)

})



const product = document.querySelector(".inputRange")
product.addEventListener('change', () => {
    product_final.value = ''
    copy.innerHTML=`copy`
})
const id = document.querySelector("#value")
id.innerHTML = product.value
product.oninput = function () { id.innerHTML = this.value }
const product_final = document.querySelector(".final_product")



btn.addEventListener('click', () => {
    copy.innerHTML = 'copy'
    pass = ''
    for (let i = 0, n = charse0.length, m = charse0.length, h = charse1.length; i < product.value; ++i) {
        pass += charse.charAt(Math.floor(Math.random() * n));
        product_final.value = pass
    }

})

       /// modal config

       function closeModal(){
        const close=document.querySelector('.fa-close')
         close.addEventListener('click',function(){
         modal.classList.remove('modal')
         modal.classList.add('none')
   
         })
       }

const ModalActive=document.querySelector(".aboutme")
const modal=document.querySelector(".none")
ModalActive.addEventListener('click', ()=>{
    modal.classList.remove('none')
    modal.classList.add('modal')
    closeModal()


 })


