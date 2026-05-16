"use server"

import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function registerUser(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const middleName = formData.get("middleName") as string | null
    const gender = formData.get("gender") as string
    const country = formData.get("country") as string
    const age = parseInt(formData.get("age") as string)
    const phone = formData.get("phone") as string
    const whatsapp = formData.get("whatsapp") as string

    if (!email || !password || !firstName || !lastName) {
      return { success: false, error: "Missing required fields" }
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return { success: false, error: "User with this email already exists" }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        middleName,
        gender,
        country,
        age,
        phone,
        whatsapp,
      }
    })

    return { success: true, userId: user.id }
  } catch (error: any) {
    console.error("Registration error:", error)
    return { success: false, error: "An error occurred during registration." }
  }
}
