import getMatrix from "./getMatrix.js";
import TabelSizeChange from "./TabelSizeChange.js"
import task1 from "./task1.js"
import task2 from "./task2.js"


const variant_7_base = [
    [3.45, 3.55, 10],
    [3.55, 3.65, 16],
    [3.65, 3.75, 22],
    [3.75, 3.85, 30],
    [3.85, 3.95, 34],
    [3.95, 4.05, 20],
    [4.05, 4.15, 14],
    [4.15, 4.25, 10],
    [4.25, 4.35, 6],
    [4.35, 4.45, 4]
]

var start_variant_7 = [ 
    [3.45, 3.55, 10],
    [3.55, 3.65, 16],
    [3.65, 3.75, 22],
    [3.75, 3.85, 30],
    [3.85, 3.95, 34],
    [3.95, 4.05, 20],
    [4.05, 4.15, 14],
    [4.15, 4.25, 10],
    [4.25, 4.35, 6],
    [4.35, 4.45, 4]
]

const task_2_base = [
    [3.45, 3.55, 8],
    [3.55, 3.65, 13],
    [3.65, 3.75, 18],
    [3.75, 3.85, 24],
    [3.85, 3.95, 32],
    [3.95, 4.05, 28],
    [4.05, 4.15, 21],
    [4.15, 4.25, 18],
    [4.25, 4.35, 12],
    [4.35, 4.45, 6]
]

var task_2 = [ 
    [3.45, 3.55, 8],
    [3.55, 3.65, 13],
    [3.65, 3.75, 18],
    [3.75, 3.85, 24],
    [3.85, 3.95, 32],
    [3.95, 4.05, 28],
    [4.05, 4.15, 21],
    [4.15, 4.25, 18],
    [4.25, 4.35, 12],
    [4.35, 4.45, 6]
]

const task_3_base = [
    [3.45, 3.55, 10],
    [3.55, 3.65, 16],
    [3.65, 3.75, 22],
    [3.75, 3.85, 30],
    [3.85, 3.95, 34],
    [3.95, 4.05, 20],
    [4.05, 4.15, 14],
    [4.15, 4.25, 10],
    [4.25, 4.35, 6],
    [4.35, 4.45, 4]
]

var task_3 = [ 
    [3.45, 3.55, 10],
    [3.55, 3.65, 16],
    [3.65, 3.75, 22],
    [3.75, 3.85, 30],
    [3.85, 3.95, 34],
    [3.95, 4.05, 20],
    [4.05, 4.15, 14],
    [4.15, 4.25, 10],
    [4.25, 4.35, 6],
    [4.35, 4.45, 4]
]

TabelSizeChange("#amount", start_variant_7, variant_7_base, ".main_div .task1_container .MainTable", 'task1')

TabelSizeChange("#amount2", task_2, task_2_base, ".main_div .task2_container .MainTable2", 'task2')

//TabelSizeChange("#amount3", task_3, task_3_base, ".main_div .task3_container .MainTable3", 'task3')


document.querySelector("#Calculate").addEventListener('click', () => {
    start_variant_7 = getMatrix('task1')
    task1(start_variant_7)
    task_2 = getMatrix('task2')
    task2(start_variant_7, task_2)
})