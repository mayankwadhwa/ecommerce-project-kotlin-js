package app

import components.*
import react.*
import react.router.dom.hashRouter
import react.router.dom.route
import react.router.dom.switch

class App : RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        Fragment {
            child(ProductProvider) {
                hashRouter {
                    navBar()
                    switch {
                        route(path = "/", exact = true) { productList() }
                        route(path = "/details") { details() }
                        route(path = "/cart") { cart() }
                        route(path = "") {
                            default()
                        }
                    }
                }

            }
        }
    }
}

fun RBuilder.app() = child(App::class) {}
