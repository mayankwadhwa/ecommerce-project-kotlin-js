package components

import react.RProps
import react.dom.div
import react.dom.h3
import react.functionalComponent

val Navbar = functionalComponent<RProps> {
    div {
        h3 {
            +"Hello From The Nav Bar"
        }
    }
}