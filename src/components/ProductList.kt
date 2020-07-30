package components

import kotlinext.js.asJsObject
import models.Product
import react.*
import react.dom.div
import react.dom.h3


val ProductList = functionalComponent<RProps> {
//    val (products, updateProducts) = useState(data.storeProducts)
    Fragment {
        div(classes = "py-5") {
            div(classes = "container") {
                title {
                    name = "our"
                    title = "products"
                }
                div(classes = "row") {
                    productConsumer { data: List<Any> ->
                        data[2] as  { product ->
                            h3 {
                                +product.title
                            }
                        }
                    }
                }
            }
        }
    }
}

fun RBuilder.productList(): ReactElement {
    return child(ProductList) {

    }
}