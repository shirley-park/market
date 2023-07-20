'use client'
import { useList } from './hooks/useList'

export default function Home() {
  const list = useList((state) => state.items)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 flex-col text-center lg:mb-0 lg:text-left">
        <h1 className={`mb-3 text-2xl font-semibold`}>
          Market &#127822; &#127818; &#129382;
        </h1>

        <ul className="text-md opacity-70">
          {list.map((item) => (
            <li
              key={item.id}
              className="border-solid border-2 border-gray-400 rounded-md mb-4"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
