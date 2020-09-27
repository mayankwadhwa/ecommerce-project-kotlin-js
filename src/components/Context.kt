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
    var cartProducts: List<ProductModel>
    var modalOpen: Boolean
    var modalProduct: ProductModel
}

class ProductProvider : RComponent<RProps, ContextState>() {

    private val handleDetail: (Int) -> Unit = { id ->
        val item = getItem(id)
        setState {
            detailProduct = item
        }
    }

    private val getItem: ((Int) -> ProductModel) = { id ->
        state.storeProducts.first { it.id == id }
    }

    private val addToCart: (Int) -> Unit = { id ->
        val tempProducts = state.storeProducts
        val index = tempProducts.indexOf(getItem(id))
        val product = tempProducts[index]
        product.inCart = true
        product.count = 1
        val price = product.price
        product.total = price
        setState {
            storeProducts = tempProducts
            cartProducts += product
        }
    }

    private val openModal: (Int) -> Unit = { id ->
        val product = getItem(id)
        setState {
            modalProduct = product
            modalOpen = true
        }
    }


    private val closeModal: () -> Unit = {
        setState {
            modalOpen = false
        }
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
            cartProducts = emptyList()
            modalOpen = false
            modalProduct = tempDetailProduct
        }

    }


    override fun RBuilder.render() {
        productContext.Provider {
            this.attrs.value = mapOf(
                    "handleDetail" to handleDetail,
                    "addToCart" to addToCart,
                    "storeProducts" to state.storeProducts,
                    "detailProduct" to state.detailProduct,
                    "modalProduct" to state.modalProduct,
                    "modalOpen" to state.modalOpen,
                    "openModal" to openModal,
                    "closeModal" to closeModal
            )
            props.children()
        }
    }
}

val productConsumer = productContext.Consumer
