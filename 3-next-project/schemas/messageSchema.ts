import zod from 'zod';
export const MessageSchema=zod.object({
   content: zod.string().min(10, {message: "Message content must be at least 10 characters long"}).max(500, {message: "Message content must be at most 500 characters long"}),
  
})  
