package components

import react.RProps
import react.child
import react.dom.div
import react.functionalComponent

val ProductList = functionalComponent<RProps> {
    div {
        child(Product)
    }
}