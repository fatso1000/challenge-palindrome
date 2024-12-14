import Joi from "joi";

export default {
  queryParamValidation: Joi.object().keys({
    text: Joi.string().required().min(3),
  }),
};
