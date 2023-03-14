
import { getOrders, getSizes, getStyles, getMetals } from "./database.js"

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()




const buildOrderListItem = (order) => {

const foundMetal = metals.find((metal) => {
    return metal.id === order.metalId
    }
)

const foundSize = sizes.find((size) => {
        return size.id === order.sizeId
    }
)

const foundStyle = styles.find((style) => {
        return style.id === order.styleId
    }
)

const totalCost = foundMetal.price + foundSize.price + foundStyle.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})




    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
        Order #${order.id} Cost: ${costString}
    </li>`
}
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

