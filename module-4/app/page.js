import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/debojeetmitra");
  const data = await res.json();


  console.log("Hello I am from server")
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>
         {JSON.stringify(data)}
         </p>
         <button >

         </button>

    </div>
  );
}
