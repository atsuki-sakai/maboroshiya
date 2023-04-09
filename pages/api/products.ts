// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from "stripe"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method?.toLocaleLowerCase() !== "get") {
        return res.status(405).end();
    }

    const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
        apiVersion: "2022-11-15",
        maxNetworkRetries: 3
    })

    const products = await stripe.products.list().then((response) => {
        return response;
    }).catch((e) => {
        throw Error(e.message ?? "StripeのProductsの取得失敗しました。")
    })
    if (products.data.length < 1) {
        res.status(200).json([])
    }

    if (!products.data || products.data.length < 1) {
        return res.status(200).json([])
    }

    const response = await Promise.all(products.data.map(async (product, i) => {
        const prices = await stripe.prices.list({
            product: product.id,
        })
        return {
            id: product.id,
            description: product.description,
            name: product.name,
            images: product.images,
            url_label: product.unit_label,
            prices: prices.data.map(price => {
                return {
                    id: price.id,
                    currency: price.currency,
                    transform_quantity: price.transform_quantity,
                    unit_amount: price.unit_amount
                }
            })
        }
    }))


    res.status(200).json(response)

}