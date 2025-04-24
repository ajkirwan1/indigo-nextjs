"use client"
import { signIn } from "next-auth/react"
 import classes from "./sign-in-form.module.css"
export function SignIn() {
  return (
    <button className={classes.button} onClick={() => signIn()}>
      LOGIN
    </button>
  )
}