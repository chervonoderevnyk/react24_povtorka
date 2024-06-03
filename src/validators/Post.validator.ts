import Joi from "joi";

export const PostValidator=
    Joi.object({
        title: Joi
            .string()
            .pattern(/^[A-Za-z\s]{3,10}$/)
            .required()
            .messages({
                "string.pattern.base":"only words accepted",
                "string.required.base":"title is required",
            }),
        userId: Joi
            .number()
            .min(1)
            .max(300)
            .required()
            .messages({
                "nunber.min":"min 1",
                "number.max":"max number 300"
            })
    })