import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    list(@Query() query: any) {        
        return this.userService.list(query);
    }
}
