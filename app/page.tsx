export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 flex-col text-center lg:mb-0 lg:text-left">
        <h1 className={`mb-3 text-2xl font-semibold`}>
          Market &#127822; &#127818; &#129382;
        </h1>

        <ul className="text-md opacity-70">
          <li className="border-solid border-2 border-gray-400 rounded-md mb-4">
            apple
          </li>
          <li className="border-solid border-2 border-gray-400 rounded-md mb-4">
            orange
          </li>
          <li className="border-solid border-2 border-gray-400 rounded-md mb-4">
            banana
          </li>
        </ul>
      </div>
    </main>
  )
}
