import { app } from "../../../src/app"
import request from "supertest"

describe("Create a Wallet From Seed", () => {
    test("GET /wallet/fromseed - 201 [MAINNET]", async () => {
        const response = await request(app).get(
            "/wallet/from/scrub,guard,swim,catch,range,upon,dawn,ensure,segment,alpha,sentence,spend,effort,bar,benefit"
        )
        expect(response.status).toEqual(201)
        expect(response.body.address).toEqual(
            "37o7aY3eZZTXmzrDa5e4Wj3Z4ZZuyV42Aaj"
        )
        expect(response.body.privateKey).toEqual(
            "BnafXBSq1VDUdZ1nSjJoxhnQdBv2hk3o6dbV49TD1bzo"
        )
        expect(response.body.publicKey).toEqual(
            "2uuQVr3B5aGgvSJ5BMCw4Cd19tdYdnMGoYnji99aPde4"
        )
    })
})
