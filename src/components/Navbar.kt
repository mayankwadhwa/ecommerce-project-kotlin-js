package components

import kotlinx.css.*
import kotlinx.css.properties.*
import logo.callPhoneLogo
import react.RBuilder
import react.RProps
import react.child
import react.dom.i
import react.dom.li
import react.dom.nav
import react.dom.ul
import react.functionalComponent
import react.router.dom.routeLink
import styled.*

val Navbar = functionalComponent<RProps> {
    styledNav {
        css { +ComponentStyles.navWrapper }
        routeLink(to = "/") {
            callPhoneLogo()
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
                i(classes = "fas fa-cart-plus") {
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