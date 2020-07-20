package components

import react.RProps
import react.dom.h3
import react.functionalComponent

val Cart = functionalComponent<RProps> {
    h3 {
        +"Hello From The Cart"
    }
}