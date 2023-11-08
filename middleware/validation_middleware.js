const { constant_messages } = require('../constants');
const response = require('../helpers/responseGenerator')
const validateRequest = (schema, type) => async (req, res, next) => {
    try {
        let data = (type === "body") ? req.body : req.query;
        console.log('data ', data)
      const validate = await schema.validate(data)
      if (validate.error) {
        return response(res, 400, 0, validate.error.details[0].message);
      }
      console.log('we are here')
      next();
    } catch (error) {
      console.log('error in validation middleware ', error);
      return response(res, 500, 0, constant_messages.INTERNAL_SERVER_ERROR);
    }
  };

module.exports = validateRequest;