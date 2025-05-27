import { redirect } from "next/navigation"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Image src="/logo-horizontal.png" alt="Auro Logo" width={240} height={100} className="mb-8" />
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Auro</h1>
      <p className="text-lg text-gray-600 mb-8">Modern laundry management and monitoring platform.</p>
      {/* ... existing content ... */}
    </div>
  )
}
