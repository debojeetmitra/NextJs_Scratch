"use client";
import { useSearchParams } from 'next/navigation';
import React from 'react'

const SearchPage = () => {
    const searchParams = useSearchParams()

    const query = searchParams.get("q");
    const category = searchParams.get("category");  // 'electronics'
    const page = searchParams.get("page");

    const allparams = Array.from(searchParams.entries())

    console.log(allparams);
    

    return (
        <div>
            <h1>Search result for: {query}</h1>

            <p>category: {category}</p>
            <p>page: {page}</p>
        </div>
    )
    
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage