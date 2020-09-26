package components

import kotlinx.css.Color
import kotlinx.css.borderColor
import kotlinx.html.js.onClickFunction
import kotlinx.html.onClick
import models.ProductModel
import react.*
import react.dom.*
import react.router.dom.routeLink
import styled.css
import styled.styledButton

val Details = functionalComponent<RProps> {

    val (product, updateProduct) = useState(ProductModel(id = 3, title = "HTC 10 - Black",
            img = "img/product-3.png",
            price = 8,
            company = "htc",
            info =
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart = false,
            count = 0,
            total = 0
    ))
    Fragment {
        productConsumer { value: Map<String, Any> ->
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
                                span { +"$${product.price}" }
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
                                +ComponentStyles.buttonContainer
                                borderColor = Color(ComponentStyles.Colors.mainYellow)
                            }
                            attrs.disabled = product.inCart
                            attrs.onClickFunction = { event ->
                                value["addToCart"].unsafeCast<(Int) -> Unit>().invoke(product.id)
                            }
                            +if (product.inCart) "inCart" else "Add to Cart"
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