
export default (divClass, spanClass, spanText, parentName, ElementStr, ElementStrDivClass) => {
    const div = document.createElement('div')
    div.classList.add(divClass)

    const Span = document.createElement('span')
    Span.classList.add(spanClass)
    Span.classList.add('text')
    Span.innerHTML = spanText
    div.appendChild(Span)

    if(ElementStr) {
        const ElementStrDiv = document.createElement('div')
        ElementStrDiv.classList.add(ElementStrDivClass)
        ElementStrDiv.innerHTML = ElementStr
        div.appendChild(ElementStrDiv)
    }

    document.getElementsByClassName(parentName)[0].appendChild(div)
}