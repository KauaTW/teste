import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  
  transform(value: any) {
    value = value.toUpperCase();

    if(!this.isSatatusValid(value)) {
      throw new BadRequestException(`${value} is a invalid status`);
    }

    return value;
  }

  private isSatatusValid(status: any) {
    const index = this.allowedStatuses.indexOf(status);
  
    return index !== -1;
  }
}