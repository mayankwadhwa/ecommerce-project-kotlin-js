package components

import models.ProductModel
import react.*
import react.dom.div
import react.dom.h1

val Details = functionalComponent<RProps> {
    Fragment {
        productConsumer { value: Map<String, Any> ->
            (value["detailProduct"] as? ProductModel)?.let { product ->
                div(classes = "container py-5") {
                    /*Title*/
                    div(classes = "row") {
                        div(classes = "col-10 mx-auto text-center text-slanted text-blue my-5") {
                            h1 { +product.company }
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