package components

import models.Product
import react.RProps
import react.children
import react.createContext
import react.functionalComponent

@JsModule("src/data.js")
external val data: dynamic


val productContext = createContext("Hello From Context")
val ProductProvider = functionalComponent<RProps> { props ->
    productContext.Provider {
        props.children()
    }
}

val productConsumer = productContext.Consumer