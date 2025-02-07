"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session?.user) {
    return null
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p>Hello, {session.user.name}!</p>
      <p>Your role is: {session.user.role}</p>
      {session.user.role === "client" && <ClientDashboard />}
      {session.user.role === "projectManager" && <ProjectManagerDashboard />}
      {session.user.role === "superAdmin" && <SuperAdminDashboard />}
    </div>
  )
}

function ClientDashboard() {
  return <div>Client-specific dashboard content</div>
}

function ProjectManagerDashboard() {
  return <div>Project Manager-specific dashboard content</div>
}

function SuperAdminDashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mt-4 mb-2">Super Admin Controls</h2>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">
        Manage Users
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
        View Employee Locations
      </button>
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
        Project Time Schedules
      </button>
    </div>
  )
}

