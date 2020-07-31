package components

import models.Product
import react.*
import react.dom.map

@JsModule("src/data.js")
external val data: dynamic


//val detailsProducts = data.detailProduct.unsafeCast<List<Product>>()

val productContext = createContext<Map<String, Any>>()

val ProductProvider = functionalComponent<RProps> { props ->

    val handleDetail = {
        console.log("Hello From Detail")
    }

    val addToCart = {
        console.log("Hello From Add To Cart")
    }

    val (storeProducts, updateStoreProducts) = useState<List<Product>>(emptyList())
    val (detailProduct, updateDetailProduct) = useState(Product())
    useEffect(emptyList()) {
        val tempStoreProducts = mutableListOf<Product>()
        for (x in 0 until data.storeProducts.length as Int) {
            tempStoreProducts.add(data.storeProducts[x].unsafeCast<Product>())
        }
        updateStoreProducts(tempStoreProducts)
        val tempDetailProduct = data.detailProduct.unsafeCast<Product>()
        updateDetailProduct(tempDetailProduct)
    }

    productContext.Provider {
        this.attrs.value = mapOf(
                "handleDetail" to handleDetail,
                "addToCart" to addToCart,
                "storeProducts" to storeProducts,
                "detailProduct" to detailProduct
        )
        props.children()
    }
}

val productConsumer = productContext.Consumer