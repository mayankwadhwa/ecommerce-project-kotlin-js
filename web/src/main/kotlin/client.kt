import app.app
import kotlinext.js.requireAll
import react.dom.render
import kotlinx.browser.document
import kotlinx.browser.window

fun main() {
    window.onload = {
        requireAll(kotlinext.js.require.context("/Users/mayankwadhwa/IdeaProjects/ecommerce-multiplatform/web/src/main/kotlin/app", true,
            js("/\\.css$/")
        ))
        render(document.getElementById("root")) {
            app()
        }
    }
}
