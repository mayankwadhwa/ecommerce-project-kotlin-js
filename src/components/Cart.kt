package components

import react.*
import react.dom.h3

val Cart = functionalComponent<RProps> {
    h3 {
        +"Hello From The Cart"
    }
}

fun RBuilder.cart(): ReactElement{
    return child(Cart)
}