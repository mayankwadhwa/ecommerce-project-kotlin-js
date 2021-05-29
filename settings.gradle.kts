pluginManagement {
    repositories {
        google()
        jcenter()
        gradlePluginPortal()
        mavenCentral()
    }
    
}
rootProject.name = "ecommerce-multiplatform"


include(":androidApp")
include(":shared")
include(":web")

