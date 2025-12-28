import zod from 'zod';
export const verifySchemea=zod.object({
    verifyCode: zod.string()
        .length(6, {message: "Verification code must be exactly 6 characters long"})
        .regex(/^[0-9]+$/, {message: "Verification code must contain only numbers"})
})  