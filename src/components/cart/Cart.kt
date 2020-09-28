package components.cart

import components.productConsumer
import components.title
import models.ProductModel
import react.*
import react.dom.section

val Cart = functionalComponent<RProps> {
    section {
        productConsumer { map ->
            val cartProducts = map["cartProducts"].unsafeCast<List<ProductModel>>()

            if (!cartProducts.isNullOrEmpty()) {
                title {
                    name = "your"
                    title = "cart"
                }
                cartColumns()
                cartList{ contextValue = map }
            }
            else
                emptyCart()

        }
    }
}

fun RBuilder.cart(): ReactElement {
    return child(Cart)
}