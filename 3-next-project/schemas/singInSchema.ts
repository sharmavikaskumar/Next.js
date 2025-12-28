import zod from 'zod';
export const signInSchemea=zod.object({
    identifier: zod .string(),
    password: zod.string()
})  
