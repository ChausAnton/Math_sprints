export default (samples) => {
    const container = document.createElement('div')
    let Varies = []

    for (let i = 0; i < samples.length; i++) {
        samples[i] = samples[i].sort((a, b) => a - b)
        const div = document.createElement('div')
        div.classList.add('sample_' + String.fromCharCode(i + 97))
        div.classList.add('sample_task1')

        const sampleSpan = document.createElement('span')
        sampleSpan.classList.add('text_sample_name')
        sampleSpan.classList.add('text')
        sampleSpan.innerHTML = "Sample " + String.fromCharCode(i + 97).toUpperCase() + ":"

        const sampleDiv = document.createElement('div')
        sampleDiv.classList.add('sort_' + String.fromCharCode(i + 97))
        sampleDiv.classList.add('sort')

        const span = document.createElement('span')
        span.classList.add('text_sample')
        span.classList.add('text')
        span.innerHTML = samples[i]

        const RangeDiv = document.createElement('div')
        RangeDiv.classList.add('RangeDiv')

        const RangeSpan = document.createElement('span')
        RangeSpan.classList.add('RangeSpan')
        RangeSpan.classList.add('text')
        RangeSpan.innerHTML = "Range: [" + samples[i][0] + ' , ' + samples[i][samples[i].length - 1] + "]"


        let clear_sample = []
        let frequence = []
        let accumulated_frequence = []
        let relative_frequence = []
        let cumalative_relative_frequence = []
        let VariesNear = []
        for (let j of new Set(samples[i])) {
            clear_sample.push(j)
        }

        for (let j of clear_sample) {
            let count = 0
            for (let h of samples[i]) {
                if (j == h)
                    count++
            }
            frequence.push(count)
        }

        for (let j of clear_sample) {
            accumulated_frequence.push(samples[i].lastIndexOf(j) + 1)
        }

        for (let j of frequence) {
            relative_frequence.push(parseFloat((j / accumulated_frequence[accumulated_frequence.length - 1]).toFixed(3)))
        }

        for (let j = 0; j < relative_frequence.length; j++) {
            if (j === 0) {
                cumalative_relative_frequence.push(relative_frequence[j])
                continue
            }

            cumalative_relative_frequence.push(relative_frequence[j] + cumalative_relative_frequence[j - 1])
        }

        const TableDiv = document.createElement('div')
        TableDiv.classList.add('TableDiv')


        VariesNear.push(clear_sample)
        VariesNear.push(frequence)
        VariesNear.push(accumulated_frequence)
        VariesNear.push(relative_frequence)
        VariesNear.push(cumalative_relative_frequence)
        TableDiv.innerHTML = print_varies_near(VariesNear)
        Varies.push(VariesNear)

        RangeDiv.appendChild(RangeSpan)
        sampleDiv.appendChild(span)
        div.appendChild(sampleSpan)
        div.appendChild(sampleDiv)
        div.appendChild(RangeDiv)
        div.appendChild(TableDiv)
        container.appendChild(div)
    }
    let dict = {};
    dict['html'] = container
    dict['VariesNear'] = Varies
    return dict
}

function print_varies_near(VariesNear) {
    let str = "<table>" +
        "<tr>" +
        "<td>" +
        "Sample" +
        "</td>" +
        "<td>" +
        "Frequency" +
        "</td>" +
        "<td>" +
        "Accumulated Frequencies" +
        "</td>" +
        "<td>" +
        "Relative Frequencies" +
        "</td>" +
        "<td>" +
        "Comulative-Relative Frequencies" +
        "</td>" +
        "</tr>";


    for (let i = 0; i < VariesNear[0].length; i++) {

        str += "<tr>";

        str += "<td>";
        str += VariesNear[0][i];
        str += "</td>";

        str += "<td>";
        str += VariesNear[1][i];
        str += "</td>";

        str += "<td>";
        str += VariesNear[2][i];
        str += "</td>";

        str += "<td>";
        str += VariesNear[3][i];
        str += "</td>";

        str += "<td>";
        str += VariesNear[4][i];
        str += "</td>";
        str += "</tr>";
    }
    str += "</table>";

    return str

}