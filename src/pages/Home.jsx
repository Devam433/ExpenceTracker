import React from 'react'
import { Navigate } from 'react-router-dom'

function Home() {
  return (
    <div className='flex'>
        <section className='absolute bg-red-400'>
          <h1>nice curves</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nemo iste. Et cupiditate ratione dolorem iste nam quis consequatur aut assumenda deleniti! Praesentium eaque, minima totam maiores esse ullam sed.</p>
        </section>
        <section className='absolute bg-blue-400'>
          <h1>nice curves</h1>
          <p>Sit, sed! Pariatur eveniet repellat quaerat et asperiores, aut porro esse ipsa odio ea! Odit delectus, ad assumenda similique possimus quo unde dolorum repellendus quidem! Dolores odio nostrum recusandae fugiat.</p>
        </section>
        <section className='absolute bg-green-100'>
          <h1>nice curves</h1>
          <p>Culpa, eaque voluptatum tempora accusamus temporibus nemo architecto quia consectetur, quas odio quos! Nihil tempore numquam dicta ratione quis, necessitatibus tempora praesentium eius esse nobis explicabo voluptas neque ut illo!</p>
        </section>
    </div>
  )
}

export default Home