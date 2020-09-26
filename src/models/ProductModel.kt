package models

data class ProductModel(
        val id: Int = 0,
        val title: String = "",
        val img: String = "",
        val price: Int = 0,
        val company: String = "",
        val info: String = "",
        val inCart: Boolean = false,
        val count: Int = 0,
        val total: Int = 0
)
