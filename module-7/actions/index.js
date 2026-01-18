"use server";


export async function createdUser(formData){
    const name = formData.get("name")
    
    console.log("the name", name);
    
}