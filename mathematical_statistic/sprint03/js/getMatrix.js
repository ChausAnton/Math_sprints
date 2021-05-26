export default (className) => {
    var matrix = []

    let data = document.getElementsByClassName(className)
    for(let i = 0, j = 0; i < document.querySelector("#amount_b").value; i++) {
        let temp = []
        for(let h = 0; h < document.querySelector("#amount_a").value; h++, j++) {
            let value = data[j].value || data[j].placeholder
            temp.push(value)
        }
        matrix.push(temp)
    }

    return matrix
}