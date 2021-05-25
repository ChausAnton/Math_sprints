import printTableInStr from "./printTableInStr.js"

export default (TriggerName, array, baseArray, path, className) => {
    document.querySelector(TriggerName).addEventListener('change', () => {
        let new_arr = []
        for (let i = 0; i < document.querySelector(TriggerName).value; i++) { 
            new_arr.push(baseArray[i])
        }
        array = new_arr
        document.querySelector(path).innerHTML = printTableInStr(array, className)
    })
    document.querySelector(path).innerHTML = printTableInStr(array, className)
}