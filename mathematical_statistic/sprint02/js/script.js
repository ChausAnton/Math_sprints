import getMatrix from "./getMatrix.js";
import TabelSizeChange from "./TabelSizeChange.js"
import task1 from "./task1.js"
import task2 from "./task2.js"
import task3 from "./task3.js"

const variant_7_base = [
    [340, 342.6, 12],
    [342.6, 345.2, 18],
    [345.2, 347.8, 26],
    [347.8, 350.4, 38],
    [350.4, 353, 40],
    [353, 355.6, 26],
    [355.6, 358.2, 16],
    [358.2, 360.8, 6],
]

var start_variant_7 = [ 
    [340, 342.6, 12],
    [342.6, 345.2, 18],
    [345.2, 347.8, 26],
    [347.8, 350.4, 38],
    [350.4, 353, 40],
    [353, 355.6, 26],
    [355.6, 358.2, 16],
    [358.2, 360.8, 6],
]


const task_2_base = [
    [3.45, 3.55, 5],
    [3.55, 3.65, 4],
    [3.65, 3.75, 6],
    [3.75, 3.85, 12],
    [3.85, 3.95, 16],
    [3.95, 4.05, 7],
    [4.05, 4.15, 4],
    [4.15, 4.25, 5],
]

var task_2 = [ 
    [3.45, 3.55, 5],
    [3.55, 3.65, 4],
    [3.65, 3.75, 6],
    [3.75, 3.85, 12],
    [3.85, 3.95, 16],
    [3.95, 4.05, 7],
    [4.05, 4.15, 4],
    [4.15, 4.25, 5],
]

const task_3_base = [
    [3.45, 3.55, 5],
    [3.55, 3.65, 16],
    [3.65, 3.75, 24],
    [3.75, 3.85, 32],
    [3.85, 3.95, 40],
    [3.95, 4.05, 43],
    [4.05, 4.15, 47],
    [4.15, 4.25, 50],
]

var task_3 = [ 
    [3.45, 3.55, 5],
    [3.55, 3.65, 16],
    [3.65, 3.75, 24],
    [3.75, 3.85, 32],
    [3.85, 3.95, 40],
    [3.95, 4.05, 43],
    [4.05, 4.15, 47],
    [4.15, 4.25, 50],
]

TabelSizeChange("#amount", start_variant_7, variant_7_base, ".main_div .task1_container .MainTable", 'task1')

TabelSizeChange("#amount2", task_2, task_2_base, ".main_div .task2_container .MainTable2", 'task2')

TabelSizeChange("#amount3", task_3, task_3_base, ".main_div .task3_container .MainTable3", 'task3')


document.querySelector("#Calculate").addEventListener('click', () => {
    start_variant_7 = getMatrix('task1')
    task1(start_variant_7)
    task_2 = getMatrix('task2')
    task2(start_variant_7, task_2)
    task_3 = getMatrix('task3')
    task3(start_variant_7, task_3)
})