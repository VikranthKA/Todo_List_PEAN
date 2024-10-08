export interface ITodo{
    
        id: number;
        title: string;
        description: string;
        completed: boolean;
        createdBy: number;
        createdAt: Date;
        updatedAt:  Date;
    
}

export class CreateTodo{
        title:string;
        description:string;
        completed?:boolean;
        constructor(){
                this.title="";
                this.description="";
                this.completed=false

        }
}