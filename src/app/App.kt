package app

import react.*
import react.dom.*
import logo.*
import ticker.*

class App : RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        Fragment {
            h3 {
                +"Hello From App"
            }
        }
    }
}

fun RBuilder.app() = child(App::class) {}
