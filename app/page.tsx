export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to File Management System</h1>
      <p className="mb-4">Please login to access your files and manage your account.</p>
      <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Login
      </a>
    </div>
  )
}

