import express from "express"
import { fromSeed } from "./routers/wallet/fromSeed"
import { newWallet } from "./routers/wallet/newWallet"

const app = express()

app.use(express.json())
app.use(fromSeed)
app.use(newWallet)

export { app }
