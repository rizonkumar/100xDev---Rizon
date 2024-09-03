import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

async function getUserDetails() {
    try {
        const user = await client.user.findFirst()
        return user ? { username: user.username } : null
    } catch (error) {
        console.error('Error getting user:', error)
        return null
    } finally {
        await client.$disconnect()
    }
}

export default async function Home() {
    const userDetails = await getUserDetails()

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>Name: {userDetails?.username || 'No user found'}</div>
                </div>
            </div>
        </div>
    )
}
