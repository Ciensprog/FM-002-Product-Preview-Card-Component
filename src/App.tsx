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
            <p className="font-medium text-aurometal-400 text-xs tracking-[0.3125rem] uppercase">
              Perfume
            </p>
            <h1 className="font-fraunces font-bold leading-8 mb-6 mt-5 text-[2rem]">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="font-medium text-aurometal-400 text-sm leading-6">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </section>
        </div>
      </main>

      <Attribution />
    </>
  )
}
