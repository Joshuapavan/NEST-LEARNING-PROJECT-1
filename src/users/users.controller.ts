import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll(){
        return [];
    }

    @Get(":id")
    findOne(@Param("id") id: string){
        return { id };
    }

    @Patch(":id")
    patchUser(@Param("id") id: string){
        return { id };
    }

    @Get("/interns")
    getAllInterns(){
        return [];
    }

    @Delete(":id")
    deleteOne(@Param("id") id: string){
        return { id };
    }

    @Put(":id")
    updateUser(@Param("id") id: string, @Body() user: {}){
        return { id, ...user };
    }

    @Post()
    createOne(@Body() user: {} ){
        return { id: 1, status: "Created", user };
    }
}

