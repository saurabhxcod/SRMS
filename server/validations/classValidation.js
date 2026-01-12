import Joi from 'joi';

export const addClassValidation=Joi.object({
    course:Joi.string().valid("BTech","MTech","MBA","BBA").required(),
    semester:Joi.number().min(1).max(8).required()
})

export const updateClassValidation=Joi.object({
    course:Joi.string().valid("BTech","MTech","MBA","BBA").optional(),
    semester:Joi.number().min(1).max(8).optional()
})