plugins {
    kotlin("js")
}

val kotlinxHtmlVersion = project.property("kotlinx.html.version") as String
val kotlinxSerializationVersion = project.property("kotlinx.serialization.version") as String
val kotlinxCoroutinesVersion = project.property("kotlinx.coroutines.version") as String
val kotlinWrappersSuffix = project.property("kotlin.wrappers.suffix") as String
val reactRouterDomWrappersSuffix = project.property("kotlin.reactRouterDom.suffix") as String


kotlin {
    js(LEGACY) {
        useCommonJs()
        browser {
        }
        binaries.executable()
    }
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-js")

    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json-js:$kotlinxSerializationVersion")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:$kotlinxCoroutinesVersion")

    implementation(project(":shared"))

    implementation("org.jetbrains.kotlinx:kotlinx-html:$kotlinxHtmlVersion")
    implementation("org.jetbrains:kotlin-react:17.0.1-$kotlinWrappersSuffix")
    implementation("org.jetbrains:kotlin-react-dom:17.0.1-$kotlinWrappersSuffix")
    implementation("org.jetbrains:kotlin-styled:5.2.0-$kotlinWrappersSuffix")
    implementation("org.jetbrains:kotlin-extensions:1.0.1-$kotlinWrappersSuffix")
    implementation("org.jetbrains:kotlin-css:1.0.0-$kotlinWrappersSuffix")
    implementation("org.jetbrains:kotlin-react-router-dom:$reactRouterDomWrappersSuffix")
}
