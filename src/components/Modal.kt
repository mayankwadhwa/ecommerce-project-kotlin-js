package components

import kotlinx.css.Color
import kotlinx.css.backgroundColor
import kotlinx.css.borderColor
import kotlinx.css.color
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import models.ProductModel
import react.*
import react.dom.div
import react.dom.h5
import react.dom.img
import react.router.dom.routeLink
import styled.css
import styled.styledButton
import styled.styledDiv

val Modal = functionalComponent<RProps> {
    productConsumer { map: Map<String, Any> ->
        val modalOpen = map["modalOpen"].unsafeCast<Boolean>()
        val closeModal = map["closeModal"].unsafeCast<() -> Unit>()
        val modalProduct = map["modalProduct"].unsafeCast<ProductModel>()

        if (!modalOpen) {
            return@productConsumer
        } else {
            styledDiv {
                css { +ComponentStyles.modalContainer }
                div(classes = "container") {
                    div(classes = "row") {
                        styledDiv {
                            css {
                                backgroundColor = Color(ComponentStyles.Colors.mainWhite)
                                classes.add("col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5")
                            }
                            h5 { +"Item Added To The Cart" }
                            img(src = modalProduct.img, classes = "img-fluid", alt = "product") { }
                            h5 { +modalProduct.title }
                            h5(classes = "text-muted") { +"Price : $${modalProduct.price}" }
                            routeLink(to = "/"){
                                styledButton {
                                    css { +ComponentStyles.buttonContainer }
                                    +"Store"
                                    attrs.onClickFunction = {event ->
                                        closeModal.invoke()
                                    }
                                }
                            }
                            routeLink(to = "/cart"){
                                styledButton {
                                    css {
                                        +ComponentStyles.buttonContainer
                                        borderColor = Color(ComponentStyles.Colors.mainYellow)
                                        color = Color(ComponentStyles.Colors.mainYellow)
                                    }
                                    +"Go to cart"
                                    attrs.onClickFunction = {event ->
                                        closeModal.invoke()
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }
    }
}

fun RBuilder.modal(): ReactElement {
    return child(Modal)
}