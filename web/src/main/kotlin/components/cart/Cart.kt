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
            val cartSubTotal = map["cartSubtotal"].unsafeCast<Int>()
            val cartTax = map["cartTax"].unsafeCast<Int>()
            val cartTotal = map["cartTotal"].unsafeCast<Int>()
            val clearCart = map["clearCart"].unsafeCast<() -> Unit>()

            if (!cartProducts.isNullOrEmpty()) {
                title {
                    name = "your"
                    title = "cart"
                }
                cartColumns()
                cartList { contextValue = map }
                cartTotal {
                    this.cartSubtotal = cartSubTotal
                    this.cartTax = cartTax
                    this.cartTotal = cartTotal
                    this.clearCart = clearCart
                }
            } else
                emptyCart()

        }
    }
}

fun RBuilder.cart(): ReactElement {
    return child(Cart)
}