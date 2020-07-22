package components

import react.*
import react.dom.h3

val Details = functionalComponent<RProps> {
    h3 {
        +"Hello From The Details"
    }
}

fun RBuilder.details(): ReactElement{
    return child(Details)
}