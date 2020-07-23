package models

data class Product(
        val id: Int,
        val title: String,
        val img: String,
        val price: Int,
        val company: String,
        val info: String,
        val inCart: Boolean,
        val count: String,
        val total: String
)
