export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl text-black font-bold mb-4">
        Welcome to the Login App
      </h1>
      <a
        href="/login"
        className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
      >
        Go to Login Page
      </a>
    </main>
  );
}
