import TableInStr from "./TableInStr.js"

export default (TriggerName1, TriggerName2, array, baseArray, path, className) => {
    document.querySelector(TriggerName1).addEventListener('change', () => {
        actionChangeSize(TriggerName1, TriggerName2, array, baseArray, path, className)
    })
    document.querySelector(TriggerName2).addEventListener('change', () => {
        actionChangeSize(TriggerName1, TriggerName2, array, baseArray, path, className)
    })
    document.querySelector(path).innerHTML = TableInStr(['B1', 'B2'], ['A1', 'A2', 'A3'], array, className, 'Фактори')
}

function actionChangeSize(TriggerName1, TriggerName2, array, baseArray, path, className) {
    const column = document.querySelector(TriggerName1).value
    const row = document.querySelector(TriggerName2).value

    let new_arr = []
    for (let i = 0; i < row; i++) { 
        let temp = []
        for (let j = 0; j < column; j++) { 
            temp.push('')
        }
        new_arr.push(temp)
    }
    array = new_arr

    let tableNamesRows = []
    let tableNamesColumns = []

    for(let i = 1; i <= column; i++) {
        tableNamesColumns.push('A' + i)
    }

    for(let i = 1; i <= row; i++) {
        tableNamesRows.push('B' + i)
    }

    document.querySelector(path).innerHTML = TableInStr(tableNamesRows, tableNamesColumns, array, className, 'Фактори')
}