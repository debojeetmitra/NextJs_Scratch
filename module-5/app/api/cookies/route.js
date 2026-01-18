import { NextResponse } from "next/server";
import { cookies } from "next/headers"

export async function GET(request){
    //Read cookie from request

    // const theme = request.cookies.get("theme")

    const cookieStore = await cookies()

    const resultsPerPage = cookieStore.get("resultsPerPage")

    console.log("Cookies", resultsPerPage)


    // return new Response("Setting cookies" , {
    //     headers:{
    //         // "Set-Cookie":"theme-dark"
    //         "Set-Cookie": "resultsPerPage=20"
    //     }
    // })

    cookieStore.set("score", "100")

    cookieStore.delete("score")



    return NextResponse.json({message: "Cookie set!"})
}