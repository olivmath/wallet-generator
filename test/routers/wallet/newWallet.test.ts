import { app } from "../../../src/app"
import request from "supertest"

describe("Create a new Wallet", () => {
    test("GET /wallet/new - 201", async () => {
        const response = await request(app).get("/wallet/new")

        expect(response.status).toEqual(201)
    })
})
