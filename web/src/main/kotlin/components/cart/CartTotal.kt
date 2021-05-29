package components.cart

import kotlinx.html.ButtonType
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.*
import react.router.dom.routeLink

val CartTotal = functionalComponent<CartTotalProps> {props ->
    Fragment {
        div("container") {
            div("row") {
                div("col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right") {
                    routeLink(to = "/") {
                        button(classes = "btn btn-outline-danger text-uppercase mb-3 px-5") {
                            attrs.type = ButtonType.button
                            attrs.onClickFunction = {
                                props.clearCart.invoke()
                            }
                            +"Clear Cart"
                        }
                    }
                    h5 {
                        span("text-title"){
                            +"subtotal :" }
                        strong{
                            +"\u20B9 ${props.cartSubtotal}"
                        }
                    }
                    h5 {
                        span("text-title"){
                            +"tax :" }
                        strong{
                            +"\u20B9 ${props.cartTax}"
                        }
                    }
                    h5 {
                        span("text-title"){
                            +"total :" }
                        strong{
                            +"\u20B9 ${props.cartTotal}"
                        }
                    }

                }
            }
        }
    }
}


interface CartTotalProps : RProps {
    var cartSubtotal: Int
    var cartTax: Int
    var cartTotal: Int
    var clearCart: () -> Unit
}

fun RBuilder.cartTotal(handler: CartTotalProps.() -> Unit) {
    child(CartTotal) {
        this.attrs(handler)
    }
}