import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import client from '@/db'

// remove this line and use line #3 in all the code where you are using client
// const client = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json()
        await client.user.create({
            data: {
                username: body.username,
                password: body.password,
            },
        })
        return NextResponse.json(
            {
                message: 'User successfully created',
            },
            { status: 201 }
        )
    } catch (error) {
        console.error('Error creating user:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    } finally {
        await client.$disconnect()
    }
}
