package components

import react.*
import react.dom.div
import react.dom.h1
import react.dom.strong

interface TitleProps : RProps {
    var name: String
    var title: String
}

val Title = functionalComponent<TitleProps> { props ->
    div(classes = "row") {
        div(classes = "col-10 mx-auto my-2 text-center text-title") {
            h1(classes = "font-weight-bold ") {
                +props.name
                strong(classes = "text-blue") {
                    +" ${props.title}"
                }
            }
        }
    }
}

fun RBuilder.title(handler: TitleProps.() -> Unit): ReactElement {
    return child(Title) {
        this.attrs(handler)
    }
}