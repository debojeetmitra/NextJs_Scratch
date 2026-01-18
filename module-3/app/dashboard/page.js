import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link href={"/profile"}>View Proifle</Link>
    </div>
  )
}

export default DashboardPage