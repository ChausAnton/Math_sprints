import TabelSizeChange from "./TabelSizeChange.js"
import getMatrix from "./getMatrix.js"
import task1 from "./task1.js"


const main_tabel = [
    ["14.85, 11.94, 10.5, 12.35, 15.62, 13.2, 10.62, 12.82, 11.48, 13.5",
    "6.42, 5.23, 4.96, 5.6, 9.82, 10.23, 12.44, 16.5, 5.41, 6.32",
    "7.82, 9.63, 12.92, 10.82, 9.36, 5.11, 13.52, 14.2, 8.96, 9.92"],
    ["12.5, 13.8, 14.9, 12.6, 10.85, 11.96, 12.6, 13.42, 16, 17.2",
    "10.2, 10.85, 12.34, 11.95, 12.4, 14.92, 9.86, 9.62, 8.36, 13.62",
    "13.62, 12.55, 14.7, 13.25, 14.66, 8.35, 10.96, 11.62, 6.12, 15.66"]
]

var work_table =  [
        ["14.85, 11.94, 10.5, 12.35, 15.62, 13.2, 10.62, 12.82, 11.48, 13.5",
        "6.42, 5.23, 4.96, 5.6, 9.82, 10.23, 12.44, 16.5, 5.41, 6.32",
        "7.82, 9.63, 12.92, 10.82, 9.36, 5.11, 13.52, 14.2, 8.96, 9.92"],
        ["12.5, 13.8, 14.9, 12.6, 10.85, 11.96, 12.6, 13.42, 16, 17.2",
        "10.2, 10.85, 12.34, 11.95, 12.4, 14.92, 9.86, 9.62, 8.36, 13.62",
        "13.62, 12.55, 14.7, 13.25, 14.66, 8.35, 10.96, 11.62, 6.12, 15.66"]
]


TabelSizeChange("#amount_a", "#amount_b", work_table, main_tabel, ".main_div .task1_container .MainTable", 'task1')


document.querySelector("#Calculate").addEventListener('click', () => {
    let arr = getMatrix('task1')
    task1(arr)
})