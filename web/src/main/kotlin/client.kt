import app.app
import kotlinext.js.require
import kotlinext.js.requireAll
import kotlinx.browser.document
import kotlinx.browser.window
import react.dom.render

fun main() {
    window.onload = {
        requireAll(require.context("C:\\Users\\Mayank\\IdeaProjects\\ecommerce-project-kotlin-js\\web\\src\\main\\kotlin\\app", true, js("/\\.css$/")))
        render(document.getElementById("root")) {
            app()
        }
    }
}

