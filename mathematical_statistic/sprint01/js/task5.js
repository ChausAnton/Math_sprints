import {Mean, CorrectedVariance} from "./task3.js";

export default (varies_near, samples) => {
    const container = document.createElement('div')
    for (let i = 0; i < varies_near.length; i++) {
        const div = document.createElement('div')
        div.classList.add('task5_' + String.fromCharCode(i + 97))
        div.classList.add('Task5')

        const sampleSpan = document.createElement('span')
        sampleSpan.classList.add('text_sample_name')
        sampleSpan.classList.add('text')
        sampleSpan.innerHTML = "Вибірка " + String.fromCharCode(i + 97).toUpperCase() + ":"
        div.appendChild(sampleSpan)

        let expectedValue = get_interval_expected_value(varies_near, samples, i)

        const CentralIntervalDiv = document.createElement('div')
        CentralIntervalDiv.classList.add('CentralInterval')
        CentralIntervalDiv.classList.add('task5_data')

        const span1 = document.createElement('span')
        span1.classList.add('text')
        span1.classList.add('CentralInterval_text')

        span1.innerHTML = "Очікуване значення (Центральний інтервал): " + expectedValue[2]

        const LowerIntervalDiv = document.createElement('div')
        LowerIntervalDiv.classList.add('LowerInterval')
        LowerIntervalDiv.classList.add('task5_data')

        const span2 = document.createElement('span')
        span2.classList.add('text')
        span2.classList.add('LowerInterval_text')

        span2.innerHTML = "Очікуване значення (Нижній інтервал): " + expectedValue[1]

        const UpperIntervalDiv = document.createElement('div')
        UpperIntervalDiv.classList.add('UpperInterval')
        UpperIntervalDiv.classList.add('task5_data')

        const span3 = document.createElement('span')
        span3.classList.add('text')
        span3.classList.add('UpperInterval_text')

        span3.innerHTML = "Очікуване значення (Верхній інтервал): " + expectedValue[0]

        /////////////////////////////////////
        let standardDeviation = get_standard_deviation(varies_near, samples, i)

        const DeviationCentralDiv = document.createElement('div')
        DeviationCentralDiv.classList.add('DeviationCentral')
        DeviationCentralDiv.classList.add('task5_data')

        const span4 = document.createElement('span')
        span4.classList.add('text')
        span4.classList.add('DeviationCentral_text')

        span4.innerHTML = "Стандартне відхилення (Центральний інтервал): " + standardDeviation[2]

        const DeviationLowerDiv = document.createElement('div')
        DeviationLowerDiv.classList.add('DeviationLower')
        DeviationLowerDiv.classList.add('task5_data')

        const span5 = document.createElement('span')
        span5.classList.add('text')
        span5.classList.add('DeviationLower_text')

        span5.innerHTML = "Стандартне відхилення (Нижній інтервал): " + standardDeviation[1]

        const DeviationUpperDiv = document.createElement('div')
        DeviationUpperDiv.classList.add('DeviationUpper')
        DeviationUpperDiv.classList.add('task5_data')

        const span6 = document.createElement('span')
        span6.classList.add('text')
        span6.classList.add('DeviationUpper_text')

        span6.innerHTML = "Стандартне відхилення (Верхній інтервал): " + standardDeviation[0]

        ///////////////////////////////////

        CentralIntervalDiv.appendChild(span1)
        div.appendChild(CentralIntervalDiv)

        LowerIntervalDiv.appendChild(span2)
        div.appendChild(LowerIntervalDiv)
        
        UpperIntervalDiv.appendChild(span3)
        div.appendChild(UpperIntervalDiv)

        DeviationCentralDiv.appendChild(span4)
        div.appendChild(DeviationCentralDiv)

        DeviationLowerDiv.appendChild(span5)
        div.appendChild(DeviationLowerDiv)
        
        DeviationUpperDiv.appendChild(span6)
        div.appendChild(DeviationUpperDiv)

        container.appendChild(div)
    }
    return container
}

function get_interval_expected_value(varies_near, samples, i) {
    let mean = Mean(varies_near, samples, i)
    let Score = zScore()
    let sqrt = Math.sqrt(CorrectedVariance(varies_near, samples, i))

    let up = mean + Score * sqrt / Math.sqrt(samples[0].length)
    let low = mean - Score * sqrt / Math.sqrt(samples[0].length)

    return [up, low, mean]
}

function get_standard_deviation(varies_near, samples, i) {
    let Score = zScore()
    let sqrt = Math.sqrt(CorrectedVariance(varies_near, samples, i))

    let up = sqrt + Score * sqrt / Math.sqrt(samples[0].length)
    let low = sqrt - Score * sqrt / Math.sqrt(samples[0].length)

    return [up, low, sqrt]
}


function zScore () {
    let p = 0.95
    if (p > 1) {
        p *= 0.01
    }
    if (p < 0.5) {
        return -1 * zScore(1 - p)
    }
    if (p > 0.92) {
        if (p === 1) {
            return Infinity
        }

        const temp = Math.sqrt(-1 * Math.log(1 - p))
        
        return (((2.3212128 * temp + 4.8501413) * temp - 2.2979648) * temp - 2.7871893) / ((1.6370678 * temp + 3.5438892) * temp + 1)
    }

    p -= 0.5

    const temp = Math.pow(p, 2)

    return p * (((-25.4410605 * temp + 41.3911977) * temp - 18.6150006) * temp + 2.5066282) / ((((3.1308291 * temp - 21.0622410) * temp + 23.0833674) * temp - 8.4735109) * temp + 1)
}