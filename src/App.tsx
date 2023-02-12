import { Attribution } from './components/Attribution'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 z-10">
        <div className="bg-white grid grid-cols-2 max-w-[37.5rem] overflow-hidden rounded-[0.625rem] w-full">
          <section className="h-full w-full">
            <figure>
              <img src="product.jpg" height={450} width={300} alt="Product" />
            </figure>
          </section>
          <section className="p-8">
            <h1 className="font-fraunces font-bold leading-8 text-[2rem]">
              Gabrielle Essence Eau De Parfum
            </h1>
          </section>
        </div>
      </main>

      <Attribution />
    </>
  )
}
