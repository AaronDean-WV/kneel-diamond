import { getTypes, setType } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => { 
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))}
}
)

export const jewelryTypes = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const type of types) {
        html += `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.type}
        </li>`
    }

    html += "</ul>"
    return html
}

