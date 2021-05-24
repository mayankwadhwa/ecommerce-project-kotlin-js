package app

import components.*
import components.cart.cart
import react.*
import react.router.dom.browserRouter
import react.router.dom.hashRouter
import react.router.dom.route
import react.router.dom.switch

class App : RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        child(ProductProvider::class) {
            browserRouter {
                Fragment {
                    navBar()
                    switch {
                        route(path = "/", exact = true) { productList() }
                        route(path = "/details") { details() }
                        route(path = "/cart") { cart() }
                        route(path = "") { default() }
                    }
                    modal()
                }
            }

        }
    }
}

fun RBuilder.app() = child(App::class) {}
