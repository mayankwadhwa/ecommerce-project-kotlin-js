package components

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import models.ProductModel
import react.*
import kotlin.math.round


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
        val tempDetailProduct = ProductModel(0,"test", "test", "test", "Test",1,2,"test")
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
        GlobalScope.launch {
            val tempStoreProducts = mutableListOf<ProductModel>()
            val sheetResponse = KtorApi.getDatabase()
            sheetResponse.values.drop(1).forEach { row ->
                tempStoreProducts.add(ProductModel(row[0].toIntOrNull() ?: 0, row[1], row[2], row[3], row[4], row[5].toIntOrNull() ?: 0,
                    row[6].toIntOrNull() ?: 0, row[7], row[8]))
            }
            console.log(tempStoreProducts)
            setState {
                storeProducts = tempStoreProducts
            }
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
