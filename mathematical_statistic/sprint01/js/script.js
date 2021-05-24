import task1 from "./task1.js";
import task2 from "./task2.js";
import task3 from "./task3.js";
import task4 from "./task4.js";
import task5 from "./task5.js";
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
    
    document.querySelector('.main_div .task2').innerHTML = containers_for_task2(samples).innerHTML
    task2(res1['VariesNear'])

    document.querySelector('.main_div .task3').innerHTML = task3(res1['VariesNear'], samples).innerHTML
    document.querySelector('.main_div .task4').innerHTML = task4(res1['VariesNear'], samples).innerHTML

    document.querySelector('.main_div .task5').innerHTML = task5(res1['VariesNear'], samples).innerHTML

})


function containers_for_task2(samples) {
    const container = document.createElement('div')
    for (let i = 0; i < samples.length; i++) {
        const div = document.createElement('div')
        div.classList.add('chart_' + String.fromCharCode(i + 97))
        div.classList.add('chart')

        const sampleSpan = document.createElement('span')
        sampleSpan.classList.add('text_sample_name')
        sampleSpan.classList.add('text')
        sampleSpan.innerHTML = "Sample " + String.fromCharCode(i + 97).toUpperCase() + ":"

        const span1 = document.createElement('span')
        span1.classList.add('text')
        span1.classList.add('Polygon_text')
        span1.innerHTML = "Polygon chart:"

        const div1 = document.createElement('div')
        div1.classList.add('Polygon')
        div1.classList.add('Chart')

        const span2 = document.createElement('span')
        span2.classList.add('text')
        span2.classList.add('Histogram_text')
        span2.innerHTML = "Histogram chart:"

        const div2 = document.createElement('div')
        div2.classList.add('Histogram')
        div2.classList.add('Chart')

        const span3 = document.createElement('span')
        span3.classList.add('text')
        span3.classList.add('Empirical_text')
        span3.innerHTML = "Empirical distribution function chart:"

        const div3 = document.createElement('div')
        div3.classList.add('Empirical')
        div3.classList.add('Chart')

        div1.appendChild(span1)
        div2.appendChild(span2)
        div3.appendChild(span3)
        div.appendChild(sampleSpan)
        div.appendChild(div1)
        div.appendChild(div2)
        div.appendChild(div3)
        container.appendChild(div)
    }

    return container
}