export default function Navigation() {
  return (
    <nav className="flex gap-4 justify-end px-8">
      <button className="py-3 px-5 my-4 rounded bg-purple-500 hover:bg-purple-400 w-fit text-white text-xl">
        Log in
      </button>

      <button className="py-3 px-5 my-4 rounded border-2 border-purple-500 hover:bg-purple-500 w-fit text-purple-500 hover:text-white text-xl">
        Sign up
      </button>
    </nav>
  )
}
