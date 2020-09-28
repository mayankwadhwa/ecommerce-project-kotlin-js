package components.cart

import kotlinx.css.height
import kotlinx.css.rem
import kotlinx.css.width
import kotlinx.html.js.onClickFunction
import models.ProductModel
import react.RBuilder
import react.RProps
import react.child
import react.dom.div
import react.dom.i
import react.dom.span
import react.dom.strong
import react.functionalComponent
import styled.css
import styled.styledImg

val CartItem = functionalComponent<CartItemProps> { props ->
    div(classes = "row my-1 text-capitalize text-center") {
        div("col-10 mx-auto col-lg-2") {
            styledImg(src = props.item.img, alt = "product") {
                css {
                    width = 5.rem
                    height = 5.rem
                    classes.add("img-fluid")
                }
            }
        }
        div("col-10 mx-auto col-lg-2") {
            span("d-lg-none") { +"product : " }
            +props.item.title
        }
        div("col-10 mx-auto col-lg-2") {
            span("d-lg-none") { +"price : $" }
            +"${props.item.price}"
        }
        div("col-10 mx-auto col-lg-2 my-2 my-lg-0") {
            div("d-flex justify-content-center") {
                span("btn btn-black mx-1") {
                    attrs.onClickFunction = {
                        props.decrement(props.item.id)
                    }
                    +"-"
                }
                span("btn btn-black mx-1") {
                    attrs.onClickFunction = {
                        props.decrement(props.item.id)
                    }
                    +"${props.item.count}"
                }
                span("btn btn-black mx-1") {
                    attrs.onClickFunction = {
                        props.increment(props.item.id)
                    }
                    +"+"
                }
            }
        }

        div("col-10 mx-auto col-lg-2") {
            div("cart-icon") {
                i("fa fa-trash") {}
                attrs.onClickFunction = {
                    props.removeItem(props.item.id)
                }
            }
        }
        div("col-10 mx-auto col-lg-2") {
            strong { +"item total : $ ${props.item.total}" }
        }

    }
}

interface CartItemProps : RProps {
    var item: ProductModel
    var increment: (Int) -> Unit
    var decrement: (Int) -> Unit
    var removeItem: (Int) -> Unit
}

fun RBuilder.cartItem(handler: CartItemProps.() -> Unit) {
    child(CartItem) {
        this.attrs(handler)
    }
}