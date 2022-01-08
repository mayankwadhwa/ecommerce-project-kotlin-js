package components

import ComponentStyles
import kotlinx.css.map
import models.ProductModel
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
    productConsumer { contextData: Map<String, Any> ->

        styledNav {
            css {
                classes.add("navbar navbar-expand-sm  navbar-dark px-sm-5")
            }
            routeLink(to = "/") {
            }
            ul(classes = "navbar-nav align-items-center") {
                (contextData["storeProducts"] as? List<ProductModel>)?.map { it.category }?.distinct()?.forEach { category ->
                    li(classes = "nav-items ml-5") {
                        routeLink(to = "/", className = "nav-link") {
                            +category
                        }
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
}


fun RBuilder.navBar() {
    child(Navbar) {
    }
}