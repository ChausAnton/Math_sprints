import TableInStr from "./TableInStr.js"

export default (TriggerName, array, baseArray, path, className) => {
    document.querySelector(TriggerName).addEventListener('change', () => {
        let new_arr = []
        for (let i = 0; i < document.querySelector(TriggerName).value; i++) { 
            new_arr.push(baseArray[i])
        }
        array = new_arr
        document.querySelector(path).innerHTML = TableInStr(['Початок інтервалу', 'Кінець інтервалу', 'Число спостережень'], array, className)
    })
    document.querySelector(path).innerHTML = TableInStr(['Початок інтервалу', 'Кінець інтервалу', 'Число спостережень'], array, className)
}