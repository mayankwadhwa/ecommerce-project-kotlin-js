import io.ktor.client.*
import io.ktor.client.features.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.features.logging.*
import io.ktor.client.request.*


object KtorApi {
    private val client = HttpClient {
        install(HttpTimeout){
            requestTimeoutMillis = 3000
        }
        install(JsonFeature){
            serializer = KotlinxSerializer()
        }
        install(Logging) {
            logger = object : Logger {
                override fun log(message: String) {
                    print("Network: $message")
                }
            }
            level = LogLevel.ALL
        }
    }

    suspend fun getDatabase(): SheetResponse {
        return client.get(urlString = "https://sheets.googleapis.com/v4/spreadsheets/1m_Q3fTugs_m6_WiltWMBFYQnnRcHZPp4mNLpHJIaK94/values/A1%3AH98?majorDimension=ROWS&key=AIzaSyDdZ8ob8KRuVvTLGauSB5jV2Nh7Y8FaXlA")
    }

}
