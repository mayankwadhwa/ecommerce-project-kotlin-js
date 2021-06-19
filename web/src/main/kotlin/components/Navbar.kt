package components

import ComponentStyles
import com.ccfraser.muirwik.components.*
import com.ccfraser.muirwik.components.button.mButton
import com.ccfraser.muirwik.components.button.mIconButton
import kotlinx.css.*
import react.RBuilder
import react.RProps
import react.child
import react.dom.i
import react.dom.li
import react.dom.ul
import react.functionalComponent
import react.router.dom.routeLink
import styled.css
import styled.styledButton
import styled.styledDiv
import styled.styledNav

val Navbar = functionalComponent<RProps> {

    styledDiv {
        css { flexGrow = 1.0; }
        val loggedIn = false
        mAppBar(position = MAppBarPosition.static) {
            mToolbar {
                routeLink(to = "/") {
                    mIconButton("menu", color = MColor.inherit) { css { marginLeft = -12.px; marginRight = 20.px }}
                }
                mTypography("Title", variant = MTypographyVariant.h6, color = MTypographyColor.inherit) {
                    css { flexGrow = 1.0 }
                }
                if (loggedIn) {
                    mIconButton ("account_circle", color = MColor.inherit )
//                            mMenu(true, anchorEl = ) {  }
                } else {
                    routeLink(to = "/cart", className = "ml-auto") {
                        mButton("Login", color = MColor.inherit)
                    }
                }
            }
        }
    }
}


fun RBuilder.navBar() {
    child(Navbar) {
    }
}