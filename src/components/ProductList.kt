package components

import models.Product
import react.*
import react.dom.div
import react.dom.h1
import react.dom.h3
import react.dom.li


val ProductList = functionalComponent<RProps> {
//    val (products, updateProducts) = useState(data.storeProducts)
    val storeProducts = data.storeProducts[0].unsafeCast<Product>()
    Fragment {
        println("products: ${storeProducts.company}")
        div(classes = "py-5") {
            div(classes = "container") {
                title {
                    name = "our"
                    title = "products"
                }
                div(classes = "row") {
                    productConsumer { string ->
                        h3 { +string }
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