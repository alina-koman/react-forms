import UncontrolledForm from "./UncontrolledForm.tsx"
import ControlledForm from "./ControlledForm.tsx"
import {Suspense, useEffect, useState} from "react"
import Loader from "./Loader.tsx"
import {delay} from "../helpers/delay.ts"

const Root = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            await delay(2000)
            setLoading(false)
        }

        void load()
    }, [])

    if (loading) {
        return <Loader />
    }

  return (
      <main className="forms-page">
          <header className="page-header">
              <p className="eyebrow">React forms</p>
              <h1>Form handling examples</h1>
              <p className="page-description">
                  Compare controlled and uncontrolled forms in React.
              </p>
          </header>
          <Suspense fallback={<Loader />}>
              <section className="forms-grid" aria-label="Form examples">
                  <UncontrolledForm />
                  <ControlledForm />
              </section>
          </Suspense>
      </main>
  )
}

export default Root