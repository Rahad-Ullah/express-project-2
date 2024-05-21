import Joi from 'joi';

// UserName schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .required()
    .messages({
      'string.base': 'First Name should be a type of string',
      'string.empty': 'First Name is required',
      'string.max': 'First Name cannot be more than 20 characters',
      'string.pattern.base': 'First Name is not in capitalize format',
      'any.required': 'First Name is required',
    }),
  middleName: Joi.string()
    .trim()
    .max(20)
    .allow('')
    .messages({
      'string.base': 'Middle Name should be a type of string',
      'string.max': 'Middle Name cannot be more than 20 characters',
    }),
  lastName: Joi.string()
    .trim()
    .max(20)
    .required()
    .messages({
      'string.base': 'Last Name should be a type of string',
      'string.empty': 'Last Name is required',
      'string.max': 'Last Name cannot be more than 20 characters',
      'any.required': 'Last Name is required',
    }),
});

// Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.base': 'Father Name should be a type of string',
    'string.empty': 'Father Name is required',
    'any.required': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.base': 'Father Occupation should be a type of string',
    'string.empty': 'Father Occupation is required',
    'any.required': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.base': 'Father Contact No should be a type of string',
    'string.empty': 'Father Contact No is required',
    'any.required': 'Father Contact No is required',
  }),
  motherName: Joi.string().required().messages({
    'string.base': 'Mother Name should be a type of string',
    'string.empty': 'Mother Name is required',
    'any.required': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.base': 'Mother Occupation should be a type of string',
    'string.empty': 'Mother Occupation is required',
    'any.required': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.base': 'Mother Contact No should be a type of string',
    'string.empty': 'Mother Contact No is required',
    'any.required': 'Mother Contact No is required',
  }),
});

// Local Guardian schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name should be a type of string',
    'string.empty': 'Name is required',
    'any.required': 'Name is required',
  }),
  occupation: Joi.string().required().messages({
    'string.base': 'Occupation should be a type of string',
    'string.empty': 'Occupation is required',
    'any.required': 'Occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.base': 'Contact No should be a type of string',
    'string.empty': 'Contact No is required',
    'any.required': 'Contact No is required',
  }),
  address: Joi.string().required().messages({
    'string.base': 'Address should be a type of string',
    'string.empty': 'Address is required',
    'any.required': 'Address is required',
  }),
});

// Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.base': 'ID should be a type of string',
    'string.empty': 'ID is required',
    'any.required': 'ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'object.base': 'Name should be an object',
    'any.required': 'Name is required',
  }),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'string.base': 'Gender should be a type of string',
      'any.only': '{#value} is not valid',
      'any.required': 'Gender is required',
    }),
  dateOfBirth: Joi.string().optional().messages({
    'string.base': 'Date of Birth should be a type of string',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a type of string',
    'string.email': 'Email must be a valid email',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  contactNo: Joi.string()
    .length(11)
    .required()
    .messages({
      'string.base': 'Contact No should be a type of string',
      'string.length': 'Contact No must be exactly 11 characters',
      'string.empty': 'Contact No is required',
      'any.required': 'Contact No is required',
    }),
  emergencyContactNo: Joi.string().required().messages({
    'string.base': 'Emergency Contact No should be a type of string',
    'string.empty': 'Emergency Contact No is required',
    'any.required': 'Emergency Contact No is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional()
    .messages({
      'string.base': 'Blood Group should be a type of string',
      'any.only': '{#value} is not a valid Blood Group',
    }),
  presentAddress: Joi.string().required().messages({
    'string.base': 'Present Address should be a type of string',
    'string.empty': 'Present Address is required',
    'any.required': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.base': 'Permanent Address should be a type of string',
    'string.empty': 'Permanent Address is required',
    'any.required': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian should be an object',
    'any.required': 'Guardian is required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'object.base': 'Local Guardian should be an object',
    'any.required': 'Local Guardian is required',
  }),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'string.base': 'Status should be a type of string',
      'any.only': '{#value} is not a valid status',
    }),
});

export default studentValidationSchema;