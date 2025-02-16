'use server'

import { prismaClient } from "../../../../service/prismaClient"

export const addRating = async ({ rating, feedback }: { rating: number, feedback: string }) => {

    if (rating < 1) {
        return {
            status: 400,
            message: `rating can't be 0`,
        }
    }

    try {
        const result = await prismaClient.results.create({
            data: {
                rating: rating,
                feedback: feedback
            }
        })

        if (result) {
            return {
                status: 200,
                message: 'successfuly'
            }
        }
    } catch (error) {
        console.error(error)
    }

}
