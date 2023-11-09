const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.getElementsByClassName('parrafito')
const pid = document.getElementById('pid')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

console.log({
    h1,
    p,
    parrafito,
    pid,
})
h1.innerHTML = 'Patito <br>  Feo';
h1.innerText = 'Patito <br>  Feo';
// console.log(h1.getAttribute("class"))
// h1.setAttribute('class', 'rojo')

h1.classList.add("rojo")
h1.classList.remove("verde")


const img = document.createElement('img')
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1rm6JD_xviR35CvM017hWagYNuEb8ov6Y8u0FEvUTsFPr_13qevajHo5nnChW7pc_q4&usqp=CAU')
console.log(img)

pid.innerHTML = ""
pid.append(img);


form.addEventListener('submit', sumarInputValue)

function sumarInputValue(e) {
    console.log({e})
    e.preventDefault()
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    if(sumaInputs) {
        pResult.innerText = "Resultado:" + sumaInputs;
    }else {
        pResult.innerText = "Resultado:" + "No se aceptan letras";
    }
   
}