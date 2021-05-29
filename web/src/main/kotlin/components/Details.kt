package components

import kotlinx.css.Color
import kotlinx.css.borderColor
import kotlinx.css.color
import kotlinx.html.js.onClickFunction
import kotlinx.html.onClick
import models.ProductModel
import react.*
import react.dom.*
import react.router.dom.routeLink
import styled.css
import styled.styledButton

val Details = functionalComponent<RProps> {

    Fragment {
        productConsumer { value: Map<String, Any> ->
            value["detailProduct"].unsafeCast<ProductModel>().also { product ->
                div(classes = "container py-5") {
                    /*Title*/
                    div(classes = "row") {
                        div(classes = "col-10 mx-auto text-center text-slanted text-blue my-5") {
                            h1 { +product.title }
                        }
                    }
                    /*End Title*/
                    /*Product Info*/
                    div(classes = "row") {
                        div(classes = "col-10 mx-auto col-md-6 my-3") {
                            /*Product Image*/
                            img(src = product.img, classes = "img-fluid", alt = "product") { }
                        }
                        div(classes = "col-10 mx-auto col-md-6 my-3 text-capitalize") {
                            /*Product Text*/
                            h2 { +"model: ${product.title}" }
                            h4(classes = "text-title text-uppercase text-muted mt-3 mb-2") {
                                +"made by: ${product.company}"
                            }
                            h4(classes = "text-blue") {
                                strong {
                                    +"Price : "
                                    span { +"\u20B9${product.price}" }
                                }
                            }
                            p(classes = "text-capitalize font-weight-bold mt-3 mb-0") {
                                +"Some info about the product"
                            }
                            p(classes = "text-muted lead") {
                                +product.info
                            }
                            /*Buttons*/
                            routeLink(to = "/") {
                                styledButton {
                                    css { +ComponentStyles.buttonContainer }
                                    +"back to products"
                                }
                            }
                            styledButton {
                                css {
                                    borderColor = Color(ComponentStyles.Colors.mainYellow)
                                    color = Color(ComponentStyles.Colors.mainYellow)
                                    +ComponentStyles.buttonContainer
                                }
                                attrs.disabled = product.inCart
                                attrs.onClickFunction = { event ->
                                    val addToCart = value["addToCart"].unsafeCast<(Int) -> Unit>()
                                    val openModal = value["openModal"].unsafeCast<(Int) -> Unit>()
                                    addToCart(product.id)
                                    openModal(product.id)
                                }
                                +if (product.inCart) "inCart" else "Add to Cart"
                            }
                        }
                    }
                }

            }
        }
    }
}

fun RBuilder.details(): ReactElement {
    return child(Details)
}