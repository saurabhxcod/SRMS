import Joi from 'joi';
export const addStudentValidation=Joi.object({
    name:Joi.string().min(2).required(),
    rollNo:Joi.string().required(),
    course:Joi.string().valid("BTech","MTech","MBA","BBA").required(),
    semester:Joi.number().min(1).max(8).required(),
    year:Joi.number().min(2020).max(2030).required(),
    password:Joi.string().min(6).required(),
    email:Joi.string().email().optional()
})

export const updateStudentValidation=Joi.object({
    name:Joi.string().min(2).optional(),
    course:Joi.string().valid("BTech","MTech","MBA","BBA").optional(),
    semester:Joi.number().min(1).max(8).optional(),
    year:Joi.number().min(2020).max(2030).optional(),
    password:Joi.string().min(6).optional(),
    email:Joi.string().email().optional()
})

