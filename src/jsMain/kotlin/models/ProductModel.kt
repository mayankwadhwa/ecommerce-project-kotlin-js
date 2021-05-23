package models

data class ProductModel(
        val id: Int = 0,
        val title: String = "",
        val img: String = "",
        var price: Int = 0,
        val company: String = "",
        val info: String = "",
        var inCart: Boolean = false,
        var count: Int = 0,
        var total: Int = 0
)
