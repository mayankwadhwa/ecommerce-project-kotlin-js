package components

import kotlinx.html.js.onClickFunction
import models.Product
import react.RBuilder
import react.RProps
import react.child
import react.dom.*
import react.functionalComponent
import react.router.dom.routeLink
import styled.css
import styled.styledDiv

interface ProductProps : RProps {
    var key: Int
    var product: Product
}

val Product = functionalComponent<ProductProps> { props ->
    styledDiv {
        css {
            +ComponentStyles.productWrapper
            classes = mutableListOf("col-9 mx-auto col-md-6 col-lg-3 my-3")
        }
        div(classes = "card") {}
        div(classes = "img-container p-5") {
            attrs.onClickFunction = {
                println("You Clicked Me")
            }
            routeLink(to = "/details") {
                img(src = props.product.img, alt = "product", classes = "card-img-top") {}
            }
            button(classes = "cart-btn") {
                attrs.disabled = props.product.inCart
                attrs.onClickFunction = { println("Added to the cart") }
                if (props.product.inCart) {
                    p(classes = "text-capitalize mb-0") { +"in cart" }
                } else {
                    i(classes = "fa fa-cart-plus") {}
                }
            }
        }
        /*Footer*/
        div(classes = "card-footer d-flex justify-content-between") {
            p(classes = "align-self-center mb-0") { +props.product.title }
            h5(classes = "text-blue font-italic mb-0") {
                span(classes = "mr-1") { +"$" }
                attrs.text(props.product.price)
            }
        }
    }
}

fun RBuilder.product(handler: ProductProps.() -> Unit) {
    child(Product) {
        this.attrs(handler)
    }
}