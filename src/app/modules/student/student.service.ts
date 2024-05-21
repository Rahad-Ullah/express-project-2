import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExist(studentData.id)) {
    throw new Error('User already exists!');
  }
  
  const result = await Student.create(studentData); //built-in static method

  //   const student = new Student(studentData); //create a new instance

  //   if(await student.isUserExist(studentData.id)){
  //     throw new Error('User already exists!')
  //   }

  //   const result = await student.save(); //built-in instance method

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSigleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSigleStudentFromDB,
};
