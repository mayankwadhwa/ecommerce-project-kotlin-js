package components

import react.RBuilder
import react.RProps
import react.dom.h3
import react.functionalComponent

val Product = functionalComponent<RProps> {
    h3 {
        +"Hello From The Product"
    }
}
