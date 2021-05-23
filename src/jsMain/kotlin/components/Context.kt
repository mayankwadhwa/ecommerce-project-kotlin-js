package components

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.ProductModel
import react.*
import kotlin.math.round

@JsNonModule
@JsModule("/Users/mayankwadhwa/IdeaProjects/ecommerce-project-kotlin-js/src/main/kotlin/data.js")
external val data: dynamic


//val detailsProducts = data.detailProduct.unsafeCast<List<Product>>()

val productContext = createContext<Map<String, Any>>()

interface ContextState : RState {
    var storeProducts: List<ProductModel>
    var detailProduct: ProductModel
    var cartProducts: List<ProductModel>
    var modalOpen: Boolean
    var modalProduct: ProductModel
    var cartSubTotal: Double
    var cartTax: Double
    var cartTotal: Double
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
        addTotals()
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
        setState { cartProducts = emptyList() }
        setProducts()
    }

    private val addTotals: () -> Unit = {
        var subTotal = 0.0
        state.cartProducts.forEach { product -> subTotal += product.total }
        val tempTax = subTotal * 0.1
        val total = subTotal + tempTax
        setState {
            cartSubTotal = subTotal
            cartTax = tempTax
            cartTotal = total
        }
    }

    override fun componentDidMount() {
        GlobalScope.launch {
            val database = KtorApi.getDatabase()
            console.log(database.values)
        }
        val tempDetailProduct = data.detailProduct.unsafeCast<ProductModel>()
        setState {
            detailProduct = tempDetailProduct
            cartProducts = emptyList()
            modalOpen = false
            modalProduct = tempDetailProduct
            cartSubTotal = 0.0
            cartTax = 0.0
            cartTotal = 0.0
        }
        setProducts()
    }

    private fun setProducts(){
        val tempStoreProducts = mutableListOf<ProductModel>()
        for (x in 0 until data.storeProducts.length as Int) {
            tempStoreProducts.add(data.storeProducts[x].unsafeCast<ProductModel>())
        }
        setState {
            storeProducts = tempStoreProducts
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
                    "clearCart" to clearCart,
                    "cartSubtotal" to state.cartSubTotal,
                    "cartTax" to state.cartTax,
                    "cartTotal" to state.cartTotal
            )
            props.children()
        }
    }
}

val productConsumer = productContext.Consumer
