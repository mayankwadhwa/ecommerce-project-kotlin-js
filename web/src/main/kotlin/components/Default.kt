package components

import react.*
import react.dom.details
import react.dom.h3

val Default = functionalComponent<RProps> {
    h3 {
        +"Hello From The Page Not Found"
    }
}

fun RBuilder.default(): ReactElement{
    return child(Default)
}