import TableInStr from "./TableInStr.js"
import createHtml from "./createHtml.js"
import PirsonPoint from "./PirsonPoint.js"

export default (arr) => {
    let hit = get_IntervalStatisticalSeries(arr)
    let interval = interval_to_str(arr)
    let array = []
    for(let i = 0; i < hit.length; i++) {
        let temp = []
        temp.push(interval[i])
        temp.push(arr[i][2])
        temp.push(hit[i])
        array.push(temp)
    }
    let table = TableInStr(['Interval', 'Value of interval', 'Hit'], array, 'hit_table')

    createHtml('task1_1', 'span1_1', 'Interval statistical series:', 'task1_container', table, 'table1_1')

    print_chart(hit, interval, "chart1" , "Interval statistical series", "result_chart", "task1_container", "class");

    createHtml('task1_2', 'span1_2', 'Hypothesis:', 'task1_container', null, '')

    let VN = get_varies_near_from_arr(arr);
    VN.set("sample_average", mean(VN.get("sample"), VN.get("repeat"), VN.get("size")));
    VN.set("standard_deviation", get_sample_standard_deviation(
                                            VN.get("sample"), 
                                            VN.get("repeat"), 
                                            VN.get("size"),
                                            VN.get("sample_average"))
                                        )

    VN.set("variance", get_selective_variance(
        VN.get("sample"), 
        VN.get("repeat"), 
        VN.get("size"),
        VN.get("sample_average"))
        )

    let temp = get_theoretical_frequencies(VN);
    VN.set("theoretical_frequencies", temp[0]);
    VN.set("hit_chance", temp[1]);
    VN.set("interval_str", interval_to_str(VN.get("array")));
    
    let pirson = HOPirson(VN)
    let ChartArray = []
    for(let i = 0; i < pirson["table"].length; i++) {
        let temp = []
        for(let j in pirson["table"][i]) {
            temp.push(pirson["table"][i][j].toFixed(5))
        }
        ChartArray.push(temp)
    }

    createHtml('task1_2_1', 'span1_3', 'H0: ' + pirson['HO'], 'task1_2', NaN, '')


    table = TableInStr(['Xi', 'Xi+1', 'ni', 'x1', 'x2', 'F(x1)', 'F(x2)', 'pi', 'ni', 'Ki'], ChartArray, 'Iteration_table')

    createHtml('task1_2_2', 'span1_4', 'Iteration table:', 'task1_2', table, 'table1_2')

    createHtml('task1_2_1', 'span1_3', 'Power of freedom: ' + pirson['result']['FreedomPower'], 'task1_2', NaN, '')

    createHtml('task1_2_1', 'span1_3', 'Observed value P: ' + pirson['result']['observedValue'], 'task1_2', NaN, '')

    createHtml('task1_2_1', 'span1_3', 'Critical point p: ' + pirson['result']['criticalPoint'], 'task1_2', NaN, '')
}

function HOPirson(varies) {
    let table = []
    let observedValue = 0
    const deviationValue = Math.sqrt(varies.get("variance"))
    for(let i = 0; i < varies.get("array").length; i ++) {
        const xi = varies.get("array")[i][0]
        const xi_next = varies.get("array")[i][1]
        const ni = varies.get("array")[i][2]

        let x1 = (xi - varies.get("sample_average")) / deviationValue
        let x2 = (xi_next - varies.get("sample_average")) / deviationValue

        let x1_sign = false
        let x2_sign = false

        if(x1 < 0) {
            x1= -x1
            x1_sign = true
        }

        if(x2 < 0) {
            x2 = -x2
            x2_sign = true
        }

        let F1 = laplase(x1)
        let F2 = laplase(x2)

        if(x1_sign) {
            F1 = -F1
        }
        if(x2_sign) {
            F2 = -F2
        }

        const pi = F2 - F1
        const ni_s = varies.get("size") * pi

        const Ki = ((ni - ni_s) ** 2) / ni_s

        table.push({xi, xi_next, ni, x1, x2, F1, F2, pi, ni_s, Ki})

        observedValue += Ki
    }

    const k = varies.get("repeat").length - 3

    const criticalPoint = PirsonPoint(k)

    return {
        HO: observedValue < criticalPoint,
        table,
        result: {
            observedValue,
            criticalPoint,
            FreedomPower: k
        }
    }
}

export function get_IntervalStatisticalSeries(arr) {
    let sum = 0
    let hit = []
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i][2]
    }

    for(let i = 0; i < arr.length; i++) {
        hit.push(arr[i][2] / sum)
    }
    return hit
}

export function interval_to_str(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let temp = "[";
        temp += array[index][0];
        temp += ";";
        temp += array[index][1];
        temp += ")";
        result.push(temp);
        temp = [];
    }
    return result;
}

export function print_chart(x_arr, y_arr, id, label, class_name, parent, mode) {
    let chart_div = document.createElement("div");
    chart_div.innerHTML = '<canvas id="' + id +'" class = "'+ class_name +'"></canvas>';
    
    
    if (mode == "id") {
        document.querySelector(parent).appendChild(chart_div); 
    } else if (mode == "class") {
        document.getElementsByClassName(parent)[0].appendChild(chart_div); 
    } else if (mode == "body") {
        document.body.appendChild(chart_div); 
    }

    var speedCanvas = document.getElementById(id);

  
    var densityData = {
        label: label,
        data: x_arr,
        backgroundColor: [
            'rgba(0, 100, 0, 0.8)'
        ]
        };
        
        var barChart = new Chart(speedCanvas, {
        type: 'bar',
        data: {
            labels: y_arr,
            datasets: [densityData]
        }
        })
}


export function get_varies_near_from_arr(array) {
    let VN = new Map();

    let first = [];
    let second = [];
    for (let i = 0; i < array.length; i++) {
        let temp = (array[i][1]-array[i][0])/2;
        temp = parseFloat(temp) +  parseFloat(array[i][0]);
        first.push(temp);
        second.push(array[i][2]);
        
    }
    let size = 0;
    for (let i = 0; i < array.length; i++) {
        size += parseInt(array[i][2]);
        
    }
    VN.set("sample", first);
    VN.set("repeat", second);
    VN.set("size",  size);
    VN.set("array", array);

    return VN;
}

export function mean(set1,set2,size) {
    let sum = 0.0;
    for (let i = 0; i < set1.length; i++) {
       sum += set1[i]*set2[i];
    }
    sum = sum / size;
    return sum;
}

export function get_selective_variance(arr1, arr2, size, sample) {
    let sample_average = sample;

    let result = 0.0;
    for (let index = 0; index < arr1.length; index++) {
        result += (arr2[index] * Math.pow(arr1[index] - sample_average, 2));
    }
    return result / size;
}

export function get_sample_standard_deviation (arr1, arr2,size, sample){
    return Math.sqrt(get_selective_variance(arr1,arr2,size, sample));
}

export function get_theoretical_frequencies(VN) {
    let theoretical_frequencies = [];
    let hit_chance = [];
    for (let index = 0; index < VN.get("sample").length; index++) {
        let x0 = VN.get("array")[index][0];
        let x1 = VN.get("array")[index][1];
        let n = VN.get("size");

        let z0 = (x0 - VN.get("sample_average")) / VN.get("standard_deviation");
        let z1 = (x1 - VN.get("sample_average")) / VN.get("standard_deviation");
        let F0 = laplase(z0);
        let F1 = laplase(z1);
        hit_chance.push((F1 - F0).toFixed(5));
        theoretical_frequencies.push((n*(F1 - F0)).toFixed(5));
    }
    
    return [theoretical_frequencies, hit_chance];
}


export function laplase(x) {
    return (1 / Math.sqrt(2 * Math.PI)) * method_parabol(func, 0.0, x, 500) 
} 

export function method_parabol(func ,a, b, n) {
    let h=(b-a)/n;
    let k=0.0;
    let x=a + h
    for (let i = 1; i < n/2 + 1; i++) {
      k += 4*func(x);
      x += 2*h;
    }

    x = a + 2*h;
    for(let i = 1; i < n/2; i++) {
        k += 2*func(x)
        x += 2*h
    }
    return (h/3)*(func(a)+func(b)+k)
}

export function func (z) {
    return Math.E ** (-1 * z ** 2 / 2);
}
