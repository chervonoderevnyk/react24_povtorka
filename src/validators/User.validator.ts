import Joi from "joi";

export const UserValidator =
    Joi.object({
        username: Joi
            .string()
            .pattern(/w[4,]/)
            .required()
            .messages({
                "string.pattern.base":"only words accepted",
                "string.required.base":"username is required",
            }),
        age: Joi
            .number()
            .min(0)
            .max(100)
            .required()
            .messages({
                "number.min":"min asd",
                "number.max":"max asdfghjkl"
            })
    })