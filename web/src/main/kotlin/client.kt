import app.app
import kotlinext.js.requireAll
import react.dom.render
import kotlinx.browser.document
import kotlinx.browser.window

fun main() {
    GlobalStyles.inject()
    window.onload = {
        requireAll(kotlinext.js.require.context("/Users/mayankwadhwa/IdeaProjects/ecommerce-multiplatform/web/src/main/kotlin", true,
            js("/\\.css$/")
        ))
        render(document.getElementById("root")) {
            app()
        }
    }
}
