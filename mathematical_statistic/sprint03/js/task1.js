import createHtml from "./createHtml.js"
import TableInStrStandart from "./TableInStrStandart.js"
import FCritical from "./FCritical.js"

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

    createHtml('task1_1', 'span1', '', 'task1Table', TableInStr(res, lastRow, generalMean), 'table1_2')

    let q = Q(samples, generalMean).toFixed(3)
    let q1 = Q1(samples, lastRow, generalMean).toFixed(3)
    let q2 = Q2(samples, means, generalMean).toFixed(3)
    let q3 = Q3(samples, means, lastRow, generalMean).toFixed(3)
    let q4 = Q4(samples, means, lastRow, generalMean).toFixed(3)

    let c1 = samples[0].length - 1
    let c2 = samples.length - 1
    let c3 = (c1 * c2).toFixed(3)

    let N = 0
    for(let i = 0; i < samples.length; i++)
        for(let j = 0; j < samples[i].length; j++)
            for(let h = 0; h < samples[i][j].length; h++)
                N++
    let c4 = N - (samples[0].length * samples.length).toFixed(3)

    let c = N - 1
    

    let s1 = (q1 / (samples[0].length - 1)).toFixed(3)
    let s2 = (q2 / (samples.length - 1)).toFixed(3)
    let s3 = (q3 / (c1 * c2)).toFixed(3)
    let s4 = (q4 / (N - samples[0].length * samples.length)).toFixed(3)
    let s = (q / (N - 1)).toFixed(3)

    let resArr = [
        ["Факттор А", q1, c1, s1],
        ["Фактор В", q2, c2, s2],
        ["Одночастний вплив факторів А і В", q3, c3, s3],
        ["Вплив іипадкових факторів", q4, c4, s4],
        ["Загальна дисперсія", q, c, s1]
    ]
    
    let table = TableInStrStandart(["Джерело що спонукає до розсіювання", "Сума квадратів відхилень", "Число ступеныв свободи", "Статистичні оцінки дисперсії"], resArr, "zal")
    createHtml('task1_1', 'span1', '', 'task1Table', table, 'table1_3')

    let Fa = (s1 / s4).toFixed(3)
    let Fb = (s2 / s4).toFixed(3)
    let Fab = (s3 / s4).toFixed(3)

    resArr = [
        ["F a:", Fa],
        ["F b:", Fb],
        ["F ab:",Fab]
    ]

    table = TableInStrStandart([], resArr, "zal2")
    createHtml('task1_1', 'span1', '', 'task1Table', table, 'table1_3')

    let F1 = FCritical(0.05, (samples[0].length - 1) - 1, (N - samples[0].length * samples.length) - 1)
    let F2 = FCritical(0.05, (samples.length - 1) - 1, (N - samples[0].length * samples.length) - 1)
    let F3 = FCritical(0.05, (c1 * c2) - 1, (N - samples[0].length * samples.length) - 1)

    console.log((N - samples[0].length * samples.length))
    resArr = [
        ["Fкр.a:", F1],
        ["Fкр.b:", F2],
        ["Fкр.ab:", F3]
    ]

    table = TableInStrStandart([], resArr, "zal3")
    createHtml('task1_1', 'span1', '', 'task1Table', table, 'table1_3')

    console.log((N - samples[0].length * samples.length))
    resArr = [
        ["F-тест a:", Fa < F1],
        ["F-туст b:", Fb < F2],
        ["F-тест ab:", Fab < F3]
    ]

    table = TableInStrStandart([], resArr, "zal4")
    createHtml('task1_1', 'span1', '', 'task1Table', table, 'table1_3')
    
}


function Q1(samples, lastRow, generalMean) {
    let sum = 0
    for(let i = 0; i < lastRow.length; i++) {
        sum += (lastRow[i] - generalMean) ** 2
    }
    return ((samples[0][0].length * samples.length) * sum)
}

function Q2(samples, means, generalMean) {
    let sum = 0
    for(let i = 0; i < means.length; i++) {
        let inSum = 0
        for(let j = 0; j < means[i].length; j++) {
            inSum += +(means[i][j])
        }
        inSum /= means[i].length
        sum += (inSum - generalMean) ** 2
    }
    
    return ((samples[0][0].length * samples[0].length) * sum)
}

function Q3(samples, means, lastRow, generalMean) {
    let Sum = 0
    console.log(means)
    for(let i = 0; i < means.length; i++) {
        let inSum = 0
        for(let j = 0; j < means[i].length; j++) {
            let Y = 0
            for(let h = 0; h < means[i].length; h++) {
                Y += +(means[i][h])
            }
            Y /= means[i].length
            Sum += (+(means[i][j]) - +(lastRow[j]) - Y + +(generalMean)) ** 2
        }
        
    }
    
    return (samples[0][0].length * Sum)
}

function Q4(samples, means) {
    let sum = 0
    for(let i = 0; i < samples.length; i++) {
        for(let j = 0; j < samples[i].length; j++) {
            for(let h = 0; h < samples[i][j].length; h++) {
                sum += (samples[i][j][h] - +(means[i][j])) ** 2
            }
        }
    }
    return sum
}

function Q(samples, generalMean) {
    let sum = 0
    for(let i = 0; i < samples.length; i++) {
        for(let j = 0; j < samples[i].length; j++) {
            for(let h = 0; h < samples[i][j].length; h++) {
                sum += (samples[i][j][h] - +(generalMean)) ** 2
            }
        }
    }
    return sum
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