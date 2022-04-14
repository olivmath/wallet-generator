import { Router } from "express"
import { wallet } from "../../services/wallet"

const router = Router()

const fromSeed = router.get("/wallet/from/:seed", (request, response) => {
    return response
        .status(201)
        .json(wallet.fromSeed(request.params.seed.split(",").join(" ")))
})

export { fromSeed }
