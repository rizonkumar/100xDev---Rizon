import axios from 'axios'

// Note: async component - Only in server component
export default async function Home() {
    return (
        <>
            <div className="flex flex-col justify-center h-screen">
                <div className="flex justify-center">
                    <div className="border p-8 rounded">
                        <p> GO to signup route</p>
                    </div>
                </div>
            </div>
        </>
    )
}
