buildscript {
    repositories {
        gradlePluginPortal()
        jcenter()
        google()
        mavenCentral()
    }
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.4.21")
        classpath(kotlin("serialization", version = "1.4.21"))
        classpath("com.android.tools.build:gradle:4.0.1")
    }
}

group = "me.mayankwadhwa"
version = "1.0"

allprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
    }
}