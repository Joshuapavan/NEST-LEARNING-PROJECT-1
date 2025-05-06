import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res} from '@nestjs/common';
import { Response } from 'express';
import { error } from 'console';

type User = {
    id: number;
    name: string;
};

@Controller('users')
export class UsersController {

    users: User[] = [
        { id: 1, name: 'John'},
        { id: 2, name: 'Doe' },
        { id: 3, name: "Josh"}
    ];

    @Get()
    findAll(){
        return this.users;
    }

    @Get(":id")
    findOne(@Param("id") id: string, @Res() res: Response){
        const userId = parseInt(id);
        const user = this.users.find((user) => user.id === userId );
        return res.status(200).json(user) || res.status(404).json({ error: "User not found" });  
    }

    @Patch(":id")
    patchUser(@Param("id") id: string, @Body() userUpdate: Partial<User>, @Res() res: Response) {
        const userId = parseInt(id);
        const user = this.users.find((user) => user.id === userId);
    
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    
        this.users = this.users.map((u) =>
            u.id === userId ? { ...u, ...userUpdate } : u
        );
    
        const updatedUser = this.users.find((u) => u.id === userId);
        return res.status(200).json(updatedUser);
    }
    
    @Put(":id")
    updateUser(@Param("id") id: string, @Body() userUpdate: Partial<User>, @Res() res: Response) {
        const userId = parseInt(id);
        const user = this.users.find((user) => user.id === userId);
    
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    
        this.users = this.users.map((u) =>
            u.id === userId ? { ...u, ...userUpdate, id: userId } : u
        );
    
        const updatedUser = this.users.find((u) => u.id === userId);
        return res.status(200).json(updatedUser);
    }
    

    @Delete(":id")
    deleteOne(@Param("id") id: string, @Res() res: Response){
        const userId = parseInt(id);
        const deletedUser = this.users.find((user) => user.id === userId);
        this.users = this.users.filter((user) => user.id !== userId)

        return res.status(200).json(deletedUser) || res.status(404).json({ error: "User not found" });
    }

    @Post()
    createOne(@Body() user: Omit<User, 'id'> ){
        const newUser = {
            ...user, 
            id: this.users.length ? Math.max(...this.users.map((u) => u.id + 1)) : 1
        };

        this.users.push(newUser);
        return { status: "Created", user: newUser };
    }
}

