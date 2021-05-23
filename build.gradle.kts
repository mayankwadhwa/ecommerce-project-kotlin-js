import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

buildscript {
    val kotlinVersion = "1.4.21"
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath(kotlin("gradle-plugin", version = kotlinVersion))
        classpath(kotlin("serialization", version = kotlinVersion))
    }
}


plugins {
    kotlin("multiplatform") version "1.4.21"
    kotlin("plugin.serialization") version "1.4.21"}

group = "me.mayankwadhwa"
version = "1.0-SNAPSHOT"
val ktor_version = "1.4.0"

val kotlinxHtmlVersion = project.property("kotlinx.html.version") as String
val kotlinxSerializationVersion = project.property("kotlinx.serialization.version") as String
val kotlinxCoroutinesVersion = project.property("kotlinx.coroutines.version") as String
val kotlinWrappersSuffix = project.property("kotlin.wrappers.suffix") as String
val reactRouterDomWrappersSuffix = project.property("kotlin.reactRouterDom.suffix") as String

val commonCore = "io.ktor:ktor-client-core:${ktor_version}"
val commonJson = "io.ktor:ktor-client-json:${ktor_version}"
val commonLogging = "io.ktor:ktor-client-logging:${ktor_version}"
val coroutinesCore = "org.jetbrains.kotlinx:kotlinx-coroutines-core:$kotlinxCoroutinesVersion"
val commonSerialization = "io.ktor:ktor-client-serialization:${ktor_version}"



repositories {
    jcenter()
    mavenCentral()
    maven { url = uri("https://maven.pkg.jetbrains.space/kotlin/p/kotlin/kotlin-js-wrappers") }
    maven { url = uri("https://maven.pkg.jetbrains.space/public/p/kotlinx-html/maven") }
}

kotlin {
    js(LEGACY) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-core:$ktor_version")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinxSerializationVersion")
                implementation(commonCore)
                implementation(commonJson)
                implementation(commonLogging)
                implementation(coroutinesCore)
                implementation(commonSerialization)
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }
        val jsMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-js:$ktor_version")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:$kotlinxCoroutinesVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-html:$kotlinxHtmlVersion")
                implementation("org.jetbrains:kotlin-react:17.0.1-$kotlinWrappersSuffix")
                implementation("org.jetbrains:kotlin-react-dom:17.0.1-$kotlinWrappersSuffix")
                implementation("org.jetbrains:kotlin-styled:5.2.0-$kotlinWrappersSuffix")
                implementation("org.jetbrains:kotlin-extensions:1.0.1-$kotlinWrappersSuffix")
                implementation("org.jetbrains:kotlin-css:1.0.0-$kotlinWrappersSuffix")
                implementation("org.jetbrains:kotlin-react-router-dom:$reactRouterDomWrappersSuffix")
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}

tasks.getByName<KotlinWebpack>("jsBrowserProductionWebpack") {
    outputFileName = "js.js"
}


