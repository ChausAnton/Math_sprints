import createHtml from "./createHtml.js"

export default (arr) => {
    let res = []
    let lastRow = []
    let samples = getSamples(arr)

    let means = getMeans(samples)

    let generalMean = 0
    for(let i = 0; i < arr.length; i++) {
        
        let temp = []
        let rowMean = 0
        let j = 0
        for(; j < arr[i].length; j++) {
            temp.push(arr[i][j])
            temp.push(means[i][j])
            rowMean += +(means[i][j])
            generalMean += +(means[i][j])
        }
        temp.push((rowMean / j).toFixed(3))
        res.push(temp)
    }

    generalMean = (generalMean / (means.length * means[0].length)).toFixed(3)

    
    for(let i = 0; i < means[0].length; i++) {
        let j = 0
        let columnMean = 0
        for(; j < means.length; j++) {
            columnMean += +(means[j][i])
        }
        lastRow.push((columnMean / j).toFixed(3))
    }
    console.log(generalMean)
    console.log(lastRow)
    let tableNamesRows = []
    let tableNamesColumns = []

    for(let i = 1; i <= arr[0]; i++) {
        tableNamesColumns.push('A' + i)
    }

    for(let i = 1; i <= arr; i++) {
        tableNamesRows.push('B' + i)
    }

    createHtml('task1_1', 'span1', 'Завдання:', 'task1Table', TableInStr(res, lastRow, generalMean), 'table1_2')
}

function TableInStr(arr, lastRow, generalMean) {
    let str = "<table><tr>"

    str +=  "<td>Фактори</td>"

    for(let i = 0; i < arr[0].length - 1; i++) {
        if(i % 2 != 0)
            str += "<td>Вибіркова середня</td>"
        else
            str +=  "<td>"+ "A" + i/2 + "</td>"
    }
    str +=  "<td>Середня ряду</td>"
    str +=  "<td>Середне</td>"
    str += "</tr>"

    for (let i = 0; i < arr.length; i++) {
        str += "<tr>";
        
        str += "<td>" + "B" + i + "</td>"

        for(let j = 0; j < arr[i].length; j++) {
            str += "<td>" + arr[i][j] + "</td>"
        }
        if(i == 0) {
            str += "<td rowspan='" + arr.length + "'>" + generalMean + "</td>"
        }
        str += "</tr>";
    }

    str += "<tr>";
    
    str += "<td>Середне стовпеця</td>"

    for(let j = 0; j < lastRow.length; j++) {
        str += "<td colspan='2'>" + lastRow[j] + "</td>"//
    }
    str += "<td> </td>"
    str += "<td> </td>"

    str += "</tr>";

    str += "</table>";

    return str;
}

function getSamples(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++) {
        let temp = []
        for(let j = 0; j < arr[i].length; j++) {
            let numbers = []
            for (let h of arr[i][j].split(', ')) {
                numbers.push(+(h))
            }
            temp.push(numbers)
        }
        res.push(temp)
    }
    return res
}

function getMeans(samples) {
    let res = []
    for(let i = 0; i < samples.length; i++) {
        let temp = []
        for(let j = 0; j < samples[i].length; j++) {
            let numbers = 0
            let h = 0
            for (;h < samples[i][j].length; h++) {
                numbers += samples[i][j][h]
            }
            temp.push((numbers/h).toFixed(3))
        }
        res.push(temp)
    }
    return res
}