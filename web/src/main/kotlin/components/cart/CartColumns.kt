package components.cart

import components.Navbar
import react.RBuilder
import react.RProps
import react.child
import react.dom.div
import react.dom.p
import react.functionalComponent


val CartColumns = functionalComponent<RProps> {
    div(classes = "container-fluid text-center d-none d-lg-block") {
        div(classes = "row"){
            div(classes = "col-10 mx-auto col-lg-2"){
                p(classes = "text-uppercase"){
                    +"products"
                }
            }
            div(classes = "col-10 mx-auto col-lg-2"){
                p(classes = "text-uppercase"){
                    +"name of product"
                }
            }
            div(classes = "col-10 mx-auto col-lg-2"){
                p(classes = "text-uppercase"){
                    +"price"
                }
            }
            div(classes = "col-10 mx-auto col-lg-2"){
                p(classes = "text-uppercase"){
                    +"quantity"
                }
            }
            div(classes = "col-10 mx-auto col-lg-2"){
                p(classes = "text-uppercase"){
                    +"remove"
                }
            }
            div(classes = "col-10 mx-auto col-lg-2"){
                p(classes = "text-uppercase"){
                    +"total"
                }
            }
        }
    }
}

fun RBuilder.cartColumns() {
    child(CartColumns) {
    }
}