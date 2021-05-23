import task1 from "./task1.js";
import task2 from "./task2.js";
import getSamples from "./getSamples.js";

document.querySelector("#amount").addEventListener('change', () => {
    const div = document.querySelector(".main_div .samples_container .samples")
    div.innerHTML = ''

    for (let i = 0; i < document.querySelector("#amount").value; i++) {
        const container = document.createElement('div')
        container.classList.add('sample')

        const lable = document.createElement('lable')
        lable.innerHTML = 'Sample ' + String.fromCharCode(i + 97).toUpperCase() + ': '
        lable.setAttribute('for', String.fromCharCode(i + 97))

        const input = document.createElement('input')
        input.type = 'text'
        input.id = 'sample-' + String.fromCharCode(i + 97)
        input.classList.add('sample_field')
        input.placeholder = '0 1 2 3 4 5 6 7 8 9'

        container.appendChild(lable)
        container.appendChild(input)
        div.appendChild(container)

    }
})

document.querySelector("#Calculate").addEventListener('click', () => {
    const div = document.querySelector(".main_div")

    for (let i = 0; i < 5; i++) {
        const container = document.createElement('div')
        container.classList.add('task' + (i + 1))
        container.classList.add('bloks')
        container.classList.add('Task')
        div.appendChild(container)
    }
    let samples = getSamples()
    let res1 = task1(samples)
    document.querySelector('.main_div .task1').innerHTML = res1['html'].innerHTML

    task2(res1['VariesNear'])
        //document.querySelector('.main_div .task2').innerHTML = task2(samples).innerHTML
})