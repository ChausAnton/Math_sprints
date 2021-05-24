export default (varies_near) => {
    destroy_charts();
    for(let i = 0; i < varies_near.length; i++) {
        let first_class = ".chart_" + String.fromCharCode(i + 97)
        print_chart(varies_near[i][0],varies_near[i][1], "chart" + i,"Polygon of transmission frequencies", "result_chart", first_class + " .Polygon", "id",1);

        let h = Math.abs(varies_near[i][0][0] - varies_near[i][0][varies_near[i][0].length-1]);
        let h_arr = new Array(varies_near[i][0].length);
        h_arr.fill(h);
    
    
        let xh_arr = new Array(varies_near[i][1].length);
        for (let z = 0; z < varies_near[i][1].length; z++) {
           xh_arr[z] = varies_near[i][1][z] / h;
        }
        print_chart(xh_arr, h_arr, "chart_" + i,"Histogram of frequencies", "result_chart", first_class + " .Histogram", "id",2);
        
    
        print_chart(varies_near[i][0], varies_near[i][4], "chart3" + i,"Histogram of frequencies", "result_chart", first_class + " .Empirical", "id",2); 
        
    }
}

function print_chart(x_arr,y_arr,id,  label,class_name, parent, mode, chart_mode) {
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

   if (chart_mode == 1) {
        var data_chart = {
        labels: x_arr,
        datasets: [{
            label: label,
            data: y_arr,
            lineTension: 0,
            fill: false,
            borderColor: 'green',
            backgroundColor: "red"
        },
    ]
        };

        var chartOptions = {
        legend: {
            display: true,
            position: 'top',

        }};

        var lineChart = new Chart(speedCanvas, {
            type: 'line',
            data: data_chart,
            options: chartOptions
        });
        charts.push(lineChart);
    }
    if (chart_mode == 2) {
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
          charts.push(barChart);
    }


}

let charts = [];

function destroy_charts() {
    let size = charts.length;
    for (let i = 0; i < size; i++) {
        charts[i].destroy();
    }
}