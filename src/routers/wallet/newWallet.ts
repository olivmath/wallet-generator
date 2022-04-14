import { Router } from "express"
import { wallet } from "../../services/wallet"

const router = Router()

const newWallet = router.get("/wallet/new", (request, response) => {
    return response.status(201).json(wallet.new())
})

export { newWallet }
