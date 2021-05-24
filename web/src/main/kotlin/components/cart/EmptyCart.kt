package components.cart

import react.RBuilder
import react.RProps
import react.child
import react.dom.div
import react.dom.h1
import react.functionalComponent

val EmptyCart = functionalComponent<RProps> {
    div(classes = "container mt-5") {
        div(classes = "row") {
            div(classes = "col-10 mx-auto text-center text-title"){
                h1 {
                    +"Your cart is currently empty"
                }
            }
        }
    }
}

fun RBuilder.emptyCart() {
    child(EmptyCart) {
    }
}