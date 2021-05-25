export default (dataArray, className) => {
    let str = "<table><tr><td>Start of interval</td><td>End of interval</td><td>Value of interval</td></tr>"

    for (let i = 0; i < dataArray.length; i++) {
        str += "<tr>";
        for(let j = 0; j < dataArray[i].length; j++) {
            str += "<td>" + "<input type='number' class='" + className + "' placeholder='" + dataArray[i][j] + "'>" + "</td>"
        }
        str += "</tr>";
    }

    str += "</table>";

    return str;
}
