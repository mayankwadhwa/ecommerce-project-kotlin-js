package me.mayankwadhwa.shared

actual class Platform actual constructor() {
    actual val platform: String
        get() = "Web"
}