import { Controller, Get, Put, Req } from '@nestjs/common';
import { request } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/homecount')
    getHomeCount(@Req request): string {
        return this.appService.getHello();
    }

    @Put('/homecount')
    updateHomeCount(): string {
        return this.appService.getHello();
    }
}
