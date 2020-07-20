package components

import react.RProps
import react.dom.details
import react.dom.h3
import react.functionalComponent

val PageNotFound = functionalComponent<RProps> {
    h3 {
        +"Hello From The Page Not Found"
    }
}