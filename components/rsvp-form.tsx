'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Mailchamp from '@/components/Mailchamp'


export function RSVPForm() {
  

  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('RSVP submitted with email:', email)
    setIsSubmitted(true)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>join mailing list</CardTitle>
        <CardDescription>get notified about more ideas</CardDescription>

        <Mailchamp/>

      </CardHeader>
    
    
    </Card>
  )
}

