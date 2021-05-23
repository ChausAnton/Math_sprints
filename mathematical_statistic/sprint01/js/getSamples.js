export default () => {
    var samples = []
    for (let i = 0; i < document.querySelector("#amount").value; i++) {
        const div = document.querySelector("#sample-" + String.fromCharCode(i + 97))
        let value = div.value
        if (!value) {
            value = div.placeholder
        }

        let numbers = []
        for (let j of value.split(' ')) {
            numbers.push(+(j.replace(",", ".")))
        }
        samples.push(numbers)
    }

    return samples
}