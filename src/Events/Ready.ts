import { Event } from "../Interfaces"

export const event: Event = {
    name:'ready',
    run: async (client) => {
        console.log(`[CLIENT]: ${client.user?.username} está no ar`)
    }
}