package models


import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class SheetResponse(
    @SerialName("majorDimension")
    val majorDimension: String,
    @SerialName("range")
    val range: String,
    @SerialName("values")
    val values: List<List<String>>
)