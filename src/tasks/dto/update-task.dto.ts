import { IsString } from 'class-validator';

export class UpdateTaskDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
