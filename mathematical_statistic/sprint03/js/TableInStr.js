export default (tableNamesRows, tableNamesColumns, dataArray, className, corner) => {
    let str = "<table><tr>"

    if(corner) {
        str +=  "<td>" + corner + "</td>"
    }

    for(let i = 0; i < tableNamesColumns.length; i++) {
        str +=  "<td>" + tableNamesColumns[i] + "</td>"
    }
    str += "</tr>"

    for (let i = 0; i < dataArray.length; i++) {
        str += "<tr>";
        if(tableNamesRows) {
            str += "<td>" + tableNamesRows[i] + "</td>"
        }
        for(let j = 0; j < dataArray[i].length; j++) {
            str += "<td>" + "<textarea rows='3' class='"+ className +"' placeholder='" + dataArray[i][j] + "'></textarea></td>"
        }
        str += "</tr>";
    }

    str += "</table>";

    return str;
}
