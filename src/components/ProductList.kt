package components

import react.*
import react.dom.div

val ProductList = functionalComponent<RProps> {
    div {
        product()
    }
}

fun RBuilder.productList(): ReactElement {
    return child(ProductList) {

    }
}