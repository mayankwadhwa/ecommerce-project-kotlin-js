package models

data class Product(
        val id: Int = 0,
        val title: String = "",
        val img: String = "",
        val price: Int = 0,
        val company: String = "",
        val info: String = "",
        val inCart: Boolean = false,
        val count: String = "",
        val total: String = ""
)
