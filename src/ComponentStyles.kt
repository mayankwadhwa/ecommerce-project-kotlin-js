import kotlinext.js.invoke
import kotlinx.css.*
import kotlinx.css.properties.Time
import kotlinx.css.properties.Timing
import kotlinx.css.properties.border
import kotlinx.css.properties.transition
import styled.StyleSheet
import styled.StyledComponents.css
import styled.css

object ComponentStyles : StyleSheet("ComponentStyles", isStatic = true) {

    object Colors {
        val mainBlue = "#2a2a72"
        val lightBlue = "#009ffd"
        val mainWhite = "#f3f3f3"
        val mainDark = "#232528"
        val mainYellow = "#ffa400"
    }

    val buttonContainer by css {
        textTransform = TextTransform.capitalize
        fontSize = 1.4.rem
        backgroundColor = Color.transparent
        border(0.05.rem, BorderStyle.solid, Color(Colors.lightBlue))
        color = Color(Colors.lightBlue)
        borderRadius = 0.5.rem
        padding(0.2.rem, 0.5.rem)
        cursor = Cursor.pointer
        margin(0.2.rem, 0.5.rem, 0.2.rem, 0.rem)
        transition("all", Time("0.5"), Timing.easeInOut)
        hover {
            backgroundColor = Color(Colors.lightBlue)
            color = Color.aliceBlue
        }
        focus {
            outline = Outline.none
        }
    }

    val productWrapper by css{
    }

}
