import Joi from 'joi';
import { Priority } from '../interfaces';

export const TaskValidation = Joi.object({
  name: Joi.string().min(3).max(200).required(),
  priority: Priority,
  description: Joi.string().max(500).required(),
  data: Joi.date().required()
});
