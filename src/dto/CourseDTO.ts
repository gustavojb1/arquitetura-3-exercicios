import { BadRequestError } from "../errors/BadRequestError";
import { CourseInputDTO, CourseOutputDTO, EditCourseInputDTO, EditCourseOutputDTO } from "../interfaces/types";
import { Course } from "../models/Course";

export class CourseDTO {
  public createCourseInput(
    id: unknown,
    name: unknown,
    lessons: unknown
  ): CourseInputDTO {
    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }

    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }

    if (typeof lessons !== "number") {
      throw new BadRequestError("'lessons' deve ser number");
    }
    const dto: CourseInputDTO = {
      id,
      name,
      lessons,
    };
    return dto;
  }

  createCourseOutput(parameter: Course): CourseOutputDTO {
    const dto: CourseOutputDTO = {
      message: "Curso criado com sucesso",
      course: {
        id: parameter.getId(),
        name: parameter.getName(),
        lessons: parameter.getLessons(),
      },
    };
    return dto;
  }

  editCourseInput(
    idToEdit: string,
    newId: unknown,
    newName: unknown,
    newLessons: unknown
  ):EditCourseInputDTO {
    if (newId !== undefined) {
      if (typeof newId !== "string") {
        throw new BadRequestError("'id' deve ser string");
      }
    }

    if (newName !== undefined) {
      if (typeof newName !== "string") {
        throw new BadRequestError("'name' deve ser string");
      }
    }

    if (newLessons !== undefined) {
      if (typeof newLessons !== "number") {
        throw new BadRequestError("'lessons' deve ser number");
      }
    }
    const dto: EditCourseInputDTO ={
        idToEdit,
        newId,
        newName,
        newLessons
    }
    return dto
  }
  editCourseOutput(parameter: Course): EditCourseOutputDTO {
    const dto: EditCourseOutputDTO = {
      message: "Curso editado com sucesso",
      course: {
        id: parameter.getId(),
        name: parameter.getName(),
        lessons: parameter.getLessons(),
      },
    };
    return dto;
  }
}
