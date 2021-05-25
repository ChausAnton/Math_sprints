import {Mean, Variance} from "./task3.js";

export default (varies_near, samples) => {
    const container = document.createElement('div')
    for (let i = 0; i < varies_near.length; i++) {
        const div = document.createElement('div')
        div.classList.add('task4_' + String.fromCharCode(i + 97))
        div.classList.add('Task4')

        const sampleSpan = document.createElement('span')
        sampleSpan.classList.add('text_sample_name')
        sampleSpan.classList.add('text')
        sampleSpan.innerHTML = "Вибірка " + String.fromCharCode(i + 97).toUpperCase() + ":"
        div.appendChild(sampleSpan)
        for(let h = 0; h < 2; h++) {

            const MeanDiv = document.createElement('div')
            MeanDiv.classList.add('Mean')
            MeanDiv.classList.add('task4_data')

            const span1 = document.createElement('span')
            span1.classList.add('text')
            span1.classList.add('Mean_text')

            if(h != 1)
                span1.innerHTML = "Очікуване значення (Метод моментів): " + Mean(varies_near, samples, i)
            else
                span1.innerHTML = "Очікуване значення (Метод найбільшої подібності): " + Mean(varies_near, samples, i)


            const VarianceDiv = document.createElement('div')
            VarianceDiv.classList.add('Variance')
            VarianceDiv.classList.add('task4_data')

            const span2 = document.createElement('span')
            span2.classList.add('text')
            span2.classList.add('Variance_text')

            if(h != 1)
                span2.innerHTML = "Значення дисперсії (Метод моментів): " + Variance(varies_near, samples, i)
            else
                span2.innerHTML = "Значення дисперсії (Метод найбільшої подібності): " + Variance(varies_near, samples, i)


            const DeviationValueDiv = document.createElement('div')
            DeviationValueDiv.classList.add('DeviationValue')
            DeviationValueDiv.classList.add('task4_data')

            const span3 = document.createElement('span')
            span3.classList.add('text')
            span3.classList.add('Variance_text')

            if(h != 1)
                span3.innerHTML = "Значення відхилення (Метод моментів): " +  Math.sqrt(Variance(varies_near, samples, i))
            else 
                span3.innerHTML = "Значення відхилення (Метод найбільшої подібності): " +  Math.sqrt(Variance(varies_near, samples, i))

            MeanDiv.appendChild(span1)
            div.appendChild(MeanDiv)

            VarianceDiv.appendChild(span2)
            div.appendChild(VarianceDiv)

            DeviationValueDiv.appendChild(span3)
            div.appendChild(DeviationValueDiv)
           
        }
        container.appendChild(div)
    }
    return container
}