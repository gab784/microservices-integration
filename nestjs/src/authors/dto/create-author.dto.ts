import { IsString, IsInt } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  name: string;

  @IsString()
  bio: string;

  @IsInt()
  userId: number;
}
