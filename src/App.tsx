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
        <div className="bg-white p-5 rounded-[0.625rem]">
          <h1 className="font-fraunces font-bold leading-8 text-[2rem]">
            Gabrielle Essence Eau De Parfum
          </h1>
        </div>
      </main>

      <Attribution />
    </>
  )
}
