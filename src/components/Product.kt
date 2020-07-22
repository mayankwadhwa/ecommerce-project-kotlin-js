package components

import react.RBuilder
import react.RProps
import react.child
import react.dom.h3
import react.functionalComponent

val Product = functionalComponent<RProps> {
    h3 {
        +"Hello From The Product"
    }
}

fun RBuilder.product(){
    child(Product)
}