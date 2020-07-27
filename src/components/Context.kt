package components

import models.Product
import react.*

@JsModule("src/data.js")
external val data: dynamic


val productContext = createContext("")

val ProductProvider = functionalComponent<RProps> {props ->
    productContext.Provider{
        this.attrs.value = "Hello World"
        props.children()
    }
}

val productConsumer = productContext.Consumer