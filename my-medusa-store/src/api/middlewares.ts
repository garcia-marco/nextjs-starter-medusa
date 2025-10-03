import { defineMiddlewares } from '@medusajs/framework/http'

import { z } from 'zod'


export default defineMiddlewares({
  routes: [
    {
      method: 'POST' as const,
      matcher: '/store/carts/:id',
      additionalDataValidator: {
        comment: z
          .string()
          .min(3, 'Custom message'),
      },
    },
  ],
})
