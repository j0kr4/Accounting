import Head from "next/head"
import Link from "next/link"
import { GlobalProvider } from "../context/State"


export const siteTitle = "Next.js Sample Website example"

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Expense Tracker application"
        />
      </Head>
      <GlobalProvider>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">Expense-App</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link active" aria-current="page">
                      Expense
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="mb-3">
          {children}
        </main>
      </GlobalProvider>
    </>
  )
}

export default Layout