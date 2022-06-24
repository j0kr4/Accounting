import Head from "next/head"
import Link from "next/link"
import { GlobalProvider } from "../context/State"


export const siteTitle = "Expense App"

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Expense application"
        />
      </Head>
      <GlobalProvider>
        <main className="mb-3">
          {children}
        </main>
      </GlobalProvider>
    </>
  )
}

export default Layout