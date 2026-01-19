import Joi from 'joi';

export const addSubjectValidation=Joi.object({
    classId:Joi.string().required(),
    name:Joi.string().required(),
    code:Joi.string().required(),
    maxMarks:Joi.number().min(50).max(100).optional()
})
export const updateSubjectValidation=Joi.object({
    name:Joi.string().optional(),
    code:Joi.string().optional(),
    maxMarks:Joi.number().min(50).max(100).optional()
})