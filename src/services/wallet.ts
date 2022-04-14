import lunesjs from "lunesjs"

export const wallet = {
    new: () => {
        return lunesjs.walletFactory()
    },
    fromSeed: (seed: string) => {
        return lunesjs.walletFactory({
            seed
        })
    }
}
