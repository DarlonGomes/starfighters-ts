import Joi from "joi";

export const battleSchema = Joi.object({
    firstUser: Joi.string().trim().required(),
    secondUser: Joi.string().trim().required()
})