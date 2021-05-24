package components

import models.ProductModel
import react.*
import react.dom.div


val ProductList = functionalComponent<RProps> {
    Fragment {
        div(classes = "py-5") {
            div(classes = "container") {
                title {
                    name = "our"
                    title = "products"
                }
                div(classes = "row") {
                    productConsumer { data: Map<String,Any> ->
                        (data["storeProducts"] as? List<ProductModel>)?.forEach { product ->
                            product{
                                key = product.id
                                this.product = product
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