package components

import models.ProductModel
import react.*

@JsModule("src/data.js")
external val data: dynamic


//val detailsProducts = data.detailProduct.unsafeCast<List<Product>>()

val productContext = createContext<Map<String, Any>>()

interface ContextState : RState {
    var storeProducts: List<ProductModel>
    var detailProduct: ProductModel
}

class ProductProvider : RComponent<RProps, ContextState>() {

    private val handleDetail = {
        console.log("Hello From Detail")
    }

    private val addToCart: (Int) -> Unit = { id ->
        console.log("Hello From Add To Cart.id is $id")
    }

    override fun componentDidMount() {
        val tempStoreProducts = mutableListOf<ProductModel>()
        for (x in 0 until data.storeProducts.length as Int) {
            tempStoreProducts.add(data.storeProducts[x].unsafeCast<ProductModel>())
        }
        val tempDetailProduct = data.detailProduct.unsafeCast<ProductModel>()
        setState {
            storeProducts = tempStoreProducts
            detailProduct = tempDetailProduct
        }

    }


    override fun RBuilder.render() {
        productContext.Provider {
            this.attrs.value = mapOf(
                    "handleDetail" to handleDetail,
                    "addToCart" to addToCart,
                    "storeProducts" to state.storeProducts,
                    "detailProduct" to state.detailProduct
            )
            props.children()
        }
    }
}

val productConsumer = productContext.Consumer
