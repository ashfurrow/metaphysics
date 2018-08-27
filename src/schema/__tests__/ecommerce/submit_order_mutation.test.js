/* eslint-disable promise/always-return */
import { runQuery } from "test/utils"
import { mockxchange } from "test/fixtures/exchange/mockxchange"
import sampleOrder from "test/fixtures/results/sample_order"
import exchangeOrderJSON from "test/fixtures/exchange/order.json"
import { OrderBuyerFields } from "./order_fields"
import gql from "lib/gql"

let rootValue

describe("Submit Order Mutation", () => {
  beforeEach(() => {
    const resolvers = {
      Mutation: {
        submitOrder: () => ({
          order: exchangeOrderJSON,
          errors: [],
        }),
      },
    }

    rootValue = mockxchange(resolvers)
  })
  it("submits order and returns it", () => {
    const mutation = gql`
      mutation {
        submitOrder(input: { orderId: "111" }) {
          result {
            order {
              ${OrderBuyerFields}
            }
            errors
          }
        }
      }
    `

    return runQuery(mutation, rootValue).then(data => {
      expect(data.submitOrder.result.order).toEqual(sampleOrder(true, false))
    })
  })
})