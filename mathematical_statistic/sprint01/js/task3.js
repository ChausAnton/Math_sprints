export default (varies_near, samples) => {
    const container = document.createElement('div')
    for (let i = 0; i < varies_near.length; i++) {
        const div = document.createElement('div')

        div.classList.add('task3_' + String.fromCharCode(i + 97))
        div.classList.add('Task3')

        const sampleSpan = document.createElement('span')
        sampleSpan.classList.add('text_sample_name')
        sampleSpan.classList.add('text')
        sampleSpan.innerHTML = "Вибірка " + String.fromCharCode(i + 97).toUpperCase() + ":"

        const MeanDiv = document.createElement('div')
        MeanDiv.classList.add('Mean')
        MeanDiv.classList.add('task3_data')

        const span1 = document.createElement('span')
        span1.classList.add('text')
        span1.classList.add('Mean_text')
        
        span1.innerHTML = "Вибіркова середня: " + Mean(varies_near, samples, i)
        
        const MedianDiv = document.createElement('div')
        MedianDiv.classList.add('Median')
        MedianDiv.classList.add('task3_data')

        const span2 = document.createElement('span')
        span2.classList.add('text')
        span2.classList.add('Median_text')

        span2.innerHTML = "Медіана: " + Median(varies_near, i)

        const ModeDiv = document.createElement('div')
        ModeDiv.classList.add('Mode')
        ModeDiv.classList.add('task3_data')

        const span3 = document.createElement('span')
        span3.classList.add('text')
        span3.classList.add('Mode_text')

        span3.innerHTML = "Мода: " + Mode(varies_near, i)

        const VarianceDiv = document.createElement('div')
        VarianceDiv.classList.add('Variance')
        VarianceDiv.classList.add('task3_data')

        const span4 = document.createElement('span')
        span4.classList.add('text')
        span4.classList.add('Variance_text')

        span4.innerHTML = "Вибіркова середня: " + Variance(varies_near, samples, i)

        const DeviationDiv = document.createElement('div')
        DeviationDiv.classList.add('Deviation')
        DeviationDiv.classList.add('task3_data')

        const span5 = document.createElement('span')
        span5.classList.add('text')
        span5.classList.add('Variance_text')

        span5.innerHTML = "Вибіркове середне квадратичне відхилення: " + Deviation(varies_near, samples, i)

        const variationDiv = document.createElement('div')
        variationDiv.classList.add('variation')
        variationDiv.classList.add('task3_data')

        const span6 = document.createElement('span')
        span6.classList.add('text')
        span6.classList.add('Variance_text')

        span6.innerHTML = "Коефіціент варіацій: " + variation(varies_near, samples, i)

        const Moment3Div = document.createElement('div')
        Moment3Div.classList.add('Moment3')
        Moment3Div.classList.add('task3_data')

        const span7 = document.createElement('span')
        span7.classList.add('text')
        span7.classList.add('Moment3_text')

        span7.innerHTML = "Централінй момент 3: " + Moment(varies_near, samples, 3, i)

        const Moment4Div = document.createElement('div')
        Moment4Div.classList.add('Moment4')
        Moment4Div.classList.add('task3_data')

        const span8 = document.createElement('span')
        span8.classList.add('text')
        span8.classList.add('Moment4_text')

        span8.innerHTML = "Централінй момент 4: " + Moment(varies_near, samples, 4, i)

        const AsymmetryDiv = document.createElement('div')
        AsymmetryDiv.classList.add('Asymmetry')
        AsymmetryDiv.classList.add('task3_data')

        const span9 = document.createElement('span')
        span9.classList.add('text')
        span9.classList.add('Asymmetry_text')

        span9.innerHTML = "Асиметрія: " + Asymmetry(varies_near, samples, i, 3)

        const ExcessDiv = document.createElement('div')
        ExcessDiv.classList.add('Excess')
        ExcessDiv.classList.add('task3_data')

        const span10 = document.createElement('span')
        span10.classList.add('text')
        span10.classList.add('Excess_text')

        span10.innerHTML = "Ексцес: " + (Asymmetry(varies_near, samples, i, 4) - 3)

        const CorrectedVarianceDiv = document.createElement('div')
        CorrectedVarianceDiv.classList.add('CorrectedVariance')
        CorrectedVarianceDiv.classList.add('task3_data')

        const span11 = document.createElement('span')
        span11.classList.add('text')
        span11.classList.add('CorrectedVariance_text')

        span11.innerHTML = "Виправлена дисперсія: " + CorrectedVariance(varies_near, samples, i)

        const CorrectedDeviationDiv = document.createElement('div')
        CorrectedDeviationDiv.classList.add('CorrectedDeviation')
        CorrectedDeviationDiv.classList.add('task3_data')

        const span12 = document.createElement('span')
        span12.classList.add('text')
        span12.classList.add('CorrectedDeviation_text')

        span12.innerHTML = "Виправлена середне квадратичне відхилення: " + CorrectedDeviation(varies_near, samples, i)

        div.appendChild(sampleSpan)
        MeanDiv.appendChild(span1)
        div.appendChild(MeanDiv)
        MedianDiv.appendChild(span2)
        div.appendChild(MedianDiv)
        ModeDiv.appendChild(span3)
        div.appendChild(ModeDiv)

        VarianceDiv.appendChild(span4)
        div.appendChild(VarianceDiv)

        DeviationDiv.appendChild(span5)
        div.appendChild(DeviationDiv)

        variationDiv.appendChild(span6)
        div.appendChild(variationDiv)

        Moment3Div.appendChild(span7)
        div.appendChild(Moment3Div)

        Moment4Div.appendChild(span8)
        div.appendChild(Moment4Div)

        AsymmetryDiv.appendChild(span9)
        div.appendChild(AsymmetryDiv)

        ExcessDiv.appendChild(span10)
        div.appendChild(ExcessDiv)

        CorrectedVarianceDiv.appendChild(span11)
        div.appendChild(CorrectedVarianceDiv)

        CorrectedDeviationDiv.appendChild(span12)
        div.appendChild(CorrectedDeviationDiv)
        
        container.appendChild(div)
    }
    return container
}

export function Mean(varies_near, samples, i) {
    let sum = 0.0
    for(let j = 0; j < varies_near[i][0].length; j++) {
        sum += varies_near[i][0][j] * varies_near[i][1][j]
    }
    sum /= samples[i].length
    return sum
}

function Median(varies_near, i) {
    let median = 0
    if(varies_near[i][0].length % 2 == 0) {
        median = (varies_near[i][0][varies_near[i][0].length / 2] + varies_near[i][0][varies_near[i][0].length / 2 + 1]) / 2
    }
    else {
        median = varies_near[i][0][parseInt(varies_near[i][0].length/2)];
    }

    return median;
}

function Mode(varies_near, i) {
    let temp = varies_near[i][1][0]
    let res = []

    for (let j = 0; j < varies_near[i][1].length; j++) {
        if (varies_near[i][1][j] > temp) {
            temp = varies_near[i][1][j]
        }
    }

    for (let j = 0; j < varies_near[i][1].length; j++) {
        if (varies_near[i][1][j] == temp) {
            res.push(varies_near[i][0][j])
        }
    }
    return res
}

export function Variance(varies_near, samples, i) {
    let mean = Mean(varies_near, samples, i)

    let res = 0.0
    for (let j = 0; j < varies_near[i][0].length; j++) {
        res += (varies_near[i][1][j] * Math.pow(varies_near[i][0][j] - mean, 2));
    }
    return res / samples[i].length;
}

function Deviation(varies_near, samples, i) {
    return Math.sqrt(Variance(varies_near, samples, i));
}

function variation(varies_near, samples, i) {
    return Deviation(varies_near, samples, i) / Mean(varies_near, samples, i)
}

function Moment(varies_near, samples, pow, i) {
    let mean = Mean(varies_near, samples, i);
    let res = 0.0;
    for (let j = 0; j < samples[i].length; j++) {
        
        res += Math.pow((samples[i][j] - mean), pow);
    }
    return res/samples[i].length;
}

function Asymmetry(varies_near, samples, i, pow) {
    let central_moment = Moment(varies_near, samples, pow, i)
    let sample_standard_deviation = Math.pow(Deviation(varies_near, samples, i), pow)
    return central_moment / sample_standard_deviation;
}

export function CorrectedVariance(varies_near, samples, i) {
    return ((samples[i].length - 1) / samples[i].length) * Variance(varies_near, samples, i);
}

function CorrectedDeviation(varies_near, samples, i) {
    return Math.sqrt(CorrectedVariance(varies_near, samples, i));
}