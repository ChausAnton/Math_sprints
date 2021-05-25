export default (className) => {
    var matrix = []

    let data = document.getElementsByClassName(className)

    for(let i = 0, j = 0; i < document.querySelector("#amount").value; i++) {
        let temp = []
        for(let h = 0; h < 3; h++, j++) {
            let value = data[j].value
            if(!value) {
                value = data[j].placeholder
            }
            temp.push(Number(value))
        }
        matrix.push(temp)
    }

    return matrix
}