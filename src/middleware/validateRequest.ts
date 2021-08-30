import Joi from "joi";

export const TaskValidation = Joi.object({
  name: Joi.string().min(3).max(200).required(),
  description: Joi.string().max(500).required(),
  data: Joi.date().required(),
});
