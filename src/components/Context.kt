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
    var cartSubTotal: Int
    var cartTax: Int
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

    private val increment: (Int) -> Unit = { id ->
        println("Increment Method")
    }

    private val decrement: (Int) -> Unit = { id ->
        println("Decrement  Method")
    }

    private val removeItem: (Int) -> Unit = { id ->
        println("Item Removed")
    }

    private val clearCart: () -> Unit = {
        println("Item Removed")
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
            cartProducts = tempStoreProducts
            modalOpen = false
            modalProduct = tempDetailProduct
            cartSubTotal = 0
            cartTax = 0
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
                    "cartProducts" to state.cartProducts,
                    "modalOpen" to state.modalOpen,
                    "openModal" to openModal,
                    "closeModal" to closeModal,
                    "increment" to increment,
                    "decrement" to decrement,
                    "removeItem" to removeItem,
                    "clearCart" to clearCart
            )
            props.children()
        }
    }
}

val productConsumer = productContext.Consumer
