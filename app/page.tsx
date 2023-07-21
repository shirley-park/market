'use client'
import { ChangeEvent } from 'react'
import { useList } from './hooks/useList'
import { useState } from 'react'

export default function Home() {
  const list = useList((state) => state.items)
  const [newItem, setNewItem] = useState('')

  console.log(list)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value)
  }

  // function Controls() {
  //   const increasePopulation = useStore((state) => state.increasePopulation)
  //   return <button onClick={increasePopulation}>one up</button>
  // }

  // const handleAdd = (e: React.FormEvent, newItem) => {
  //   list.(newItem)
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 flex-col text-center lg:mb-0 lg:text-left">
        <h1 className={`mb-3 text-2xl font-semibold`}>
          Market &#127822; &#127818; &#129382;
        </h1>

        <div className="flex-col">
          <form
          // onSubmit={handleAdd}
          >
            <label htmlFor="itemInput">What do we need from the market?</label>
            <input
              type="text"
              id="itemInput"
              onChange={handleChange}
              value={newItem}
            />
            <button
              type="submit"
              className="border-solid border-2 border-gray-400 rounded-lg
           mb-4"
            >
              add to list
            </button>
          </form>
        </div>
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
