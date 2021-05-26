export default (tableNames, dataArray, className) => {
    let str = "<table><tr>"

    for(let i = 0; i < tableNames.length; i++) {
        str +=  "<td>" + tableNames[i] + "</td>"
    }
    str += "</tr>"

    for (let i = 0; i < dataArray.length; i++) {
        str += "<tr>";
        for(let j = 0; j < dataArray[i].length; j++) {
            str += "<td>" + dataArray[i][j] + "</td>"
        }
        str += "</tr>";
    }

    str += "</table>";

    return str;
}
