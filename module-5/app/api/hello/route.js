import { NextResponse } from "next/server";

export const users = [
  {
    id: 1,
    name: "Jhon Doe",
    email: "john@ex.com",
    age: 21,
  },
  {
    id: 2,
    name: "Debo Doe",
    email: "debo@ex.com",
    age: 23,
  },
  {
    id: 3,
    name: "Pro Doe",
    email: "pro@ex.com",
    age: 24,
  },
];

export async function GET(request) {
  try {

    const searchParams = request.nextUrl.searchParams;

    const name = searchParams.get("name") //single value
    const age = searchParams.get("age")

    let filteredUsers = users;

    if(age){
      filteredUsers = filteredUsers.filter((user)=>user.age === Number(age))
    }

    if(name){
      filteredUsers = filteredUsers.filter((user)=>user.name.toLowerCase().includes(name.toLowerCase()))
    }


    

    return NextResponse.json({
        success:true,
        data:filteredUsers,
        total:filteredUsers.length
    })
  } catch (error) {
    return NextResponse.json({
      success:false, error:"Failed to get users",
      
    },
  {status:500})
  }
}
