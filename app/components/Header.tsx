"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">File Management System</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          {session ? (
            <>
              <li>
                <Link href="/dashboard" className="hover:text-gray-300">
                  Dashboard
                </Link>
              </li>
              {session.user?.role === "superAdmin" && (
                <li>
                  <Link href="/admin" className="hover:text-gray-300">
                    Admin
                  </Link>
                </li>
              )}
              <li>
                <button onClick={() => signOut()} className="hover:text-gray-300">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

