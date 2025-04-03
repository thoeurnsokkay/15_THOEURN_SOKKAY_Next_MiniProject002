import { auth } from "../auth";

export async function getCategory(){

    const session = await auth();
    console.log("session", session.token);
    const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
        method:"POST",
        headers: {
            "Authorization": `Bearer ${session?.token}`
        }
    })
    const data = await res.json();
    return data;
}

export const getAllWorkspaces = async(categoryId = "") => {
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC${categoryId}`);
    const workspaces = await res.json();
    return books;
}