package models

data class ProductModel(
        val id: Int = 0,
        val category: String,
        val subCategory: String,
        val title: String,
        val img: String,
        val mrp: Int,
        var price: Int,
        val company: String,
        val info: String = "",
        var inCart: Boolean = false,
        var count: Int = 0,
        var total: Int = 0
)
