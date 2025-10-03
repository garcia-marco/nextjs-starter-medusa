'use client'

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { startTransition, useActionState, useEffect, useState } from "react"
import { addOrderCommentToCart } from '@lib/data/cart'

const Hero = () => {
  const [comment, setComment] = useState<string>('')
  const [message, formAction] = useActionState(addOrderCommentToCart, null)

  useEffect(() => {
    const formData = new FormData()
    formData.append("comment", comment)

    startTransition(() => formAction(formData))
  }, [comment])

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Change input below to check validation message
          </Heading>
          <input name="comment" placeholder="add a comment" className="border-2 mt-2 p-2" onChange={(e) => setComment(e.target.value)} />
          {message && <div className="text-red-500 mt-2">{message}</div>}
        </span>
      </div>
    </div>
  )
}

export default Hero
