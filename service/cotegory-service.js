import { console } from "inspector";
import { auth } from "../auth";

export async function getCategory() {
  const session = await auth();
  console.log("session", session.token);
  const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.token}`,
    },
  });
  const data = await res.json();
  return data;
}

// export const getAllWorkspaces = async(categoryId = "") => {
export async function getAllWorkspaces() {
  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
    {
      headers: {
        accept: "*/*",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJzb2trYXlAZ21haWwuY29tIiwiaWF0IjoxNzQzNzI4Nzc1LCJleHAiOjE3NDM4MTUxNzV9.J2uYXtWvwoqUfjOMmwCz1Z73JICnBObF25EE7Oe8LiA5BMbfuiWRRx3lZZZTIIhNwWwsOK0rnwBPYuOhG0wLKw",
      },
    }
  );
  
  const workspaces = await res.json();
  console.log("This is a workspace: ", workspaces);
  return workspaces;
}
