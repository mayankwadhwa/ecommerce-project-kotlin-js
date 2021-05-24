package components

import ComponentStyles
import react.RBuilder
import react.RProps
import react.child
import react.dom.i
import react.dom.li
import react.dom.ul
import react.functionalComponent
import react.router.dom.routeLink
import styled.css
import styled.styledButton
import styled.styledNav

val Navbar = functionalComponent<RProps> {
    styledNav {
        css {
            classes.add("navbar navbar-expand-sm  navbar-dark px-sm-5")
        }
        routeLink(to = "/") {
        }

        ul(classes = "navbar-nav align-items-center") {
            li(classes = "nav-items ml-5") {
                routeLink(to = "/", className = "nav-link") {
                    +"products"
                }
            }
        }

        routeLink(to = "/cart", className = "ml-auto") {
            styledButton {
                css { +ComponentStyles.buttonContainer }
                i(classes = "fa fa-cart-plus") {
                    +"My Cart"
                }
            }
        }

    }
}


fun RBuilder.navBar() {
    child(Navbar) {
    }
}