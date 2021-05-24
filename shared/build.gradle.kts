import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
}

val ktor_version = "1.4.0"
val kotlinxSerializationVersion = project.property("kotlinx.serialization.version") as String
val kotlinxCoroutinesVersion = project.property("kotlinx.coroutines.version") as String

val commonCore = "io.ktor:ktor-client-core:${ktor_version}"
val commonJson = "io.ktor:ktor-client-json:${ktor_version}"
val commonLogging = "io.ktor:ktor-client-logging:${ktor_version}"
val commonSerialization = "io.ktor:ktor-client-serialization:${ktor_version}"
val coroutinesCore = "org.jetbrains.kotlinx:kotlinx-coroutines-core:$kotlinxCoroutinesVersion"

kotlin {
    js(LEGACY) {
        browser {
            testTask {
                testLogging {
                    showExceptions = true
                    exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
                    showCauses = true
                    showStackTraces = true
                }
            }
        }
        nodejs {
            testTask {
                testLogging {
                    showExceptions = true
                    exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
                    showCauses = true
                    showStackTraces = true
                }
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
//                implementation(commonSerialization)
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
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json-js:$kotlinxSerializationVersion")
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}

//tasks.getByName<KotlinWebpack>("jsBrowserProductionWebpack") {
//    outputFileName = "js.js"
//}
//

