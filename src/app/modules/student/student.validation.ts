import { z } from 'zod';

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'First Name is required')
    .max(20, 'First Name cannot be more than 20 characters'),
  middleName: z
    .string()
    .trim()
    .max(20, 'Middle Name cannot be more than 20 characters')
    .optional(),
  lastName: z
    .string()
    .trim()
    .min(1, 'Last Name is required')
    .max(20, 'Last Name cannot be more than 20 characters'),
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, 'Father Name is required'),
  fatherOccupation: z.string().min(1, 'Father Occupation is required'),
  fatherContactNo: z.string().min(1, 'Father Contact No is required'),
  motherName: z.string().min(1, 'Mother Name is required'),
  motherOccupation: z.string().min(1, 'Mother Occupation is required'),
  motherContactNo: z.string().min(1, 'Mother Contact No is required'),
});

// Local Guardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  occupation: z.string().min(1, 'Occupation is required'),
  contactNo: z.string().min(1, 'Contact No is required'),
  address: z.string().min(1, 'Address is required'),
});

// Student schema
const studentValidationSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  password: z.string().max(20),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    invalid_type_error: '{VALUE} is not valid',
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email('Email must be a valid email')
    .min(1, 'Email is required'),
  contactNo: z
    .string()
    .length(11, 'Contact No must be exactly 11 characters'),
  emergencyContactNo: z.string().min(1, 'Emergency Contact No is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string().min(1, 'Present Address is required'),
  permanentAddress: z.string().min(1, 'Permanent Address is required'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
