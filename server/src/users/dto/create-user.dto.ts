import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Ivan' })
  @IsNotEmpty({ message: 'имя обязательно!' })
  readonly username: string;

  @ApiProperty({ example: 'Ivan123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'Ivan@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
