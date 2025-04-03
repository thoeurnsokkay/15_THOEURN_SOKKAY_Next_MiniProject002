"use client";
import { signIn } from "../../auth";

export const loginAction = async (formData) => {
  console.log(formData);
  const email = formData.get("email")
  const password = formData.get("password")

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
};
