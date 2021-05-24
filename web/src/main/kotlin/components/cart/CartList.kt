package components.cart

import models.ProductModel
import react.RBuilder
import react.RProps
import react.child
import react.dom.div
import react.dom.key
import react.functionalComponent

val CartList = functionalComponent<CartListProps> { props ->
    val cartProducts = props.contextValue["cartProducts"].unsafeCast<List<ProductModel>>()
    val increment = props.contextValue["increment"].unsafeCast<(Int) -> Unit>()
    val decrement = props.contextValue["decrement"].unsafeCast<(Int) -> Unit>()
    val removeItem = props.contextValue["removeItem"].unsafeCast<(Int) -> Unit>()

    div(classes = "container-fluid") {
        cartProducts.forEach { item ->
            cartItem {
                attrs.key = item.id.toString()
                this.item = item
                this.increment = increment
                this.decrement = decrement
                this.removeItem = removeItem
            }
        }
    }
}

interface CartListProps : RProps {
    var contextValue: Map<String, Any>
}

fun RBuilder.cartList(handler: CartListProps.() -> Unit) {
    child(CartList) {
        this.attrs(handler)
    }
}