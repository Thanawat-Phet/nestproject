import {Column,DataType,Model,Table} from 'sequelize-typescript';

@Table({
    tableName: 'studentInfos',
    timestamps: false,   
})

export class StudentInfo extends Model{

    @Column({
        type:DataType.STRING(200),
        allowNull:false,
    })
    first_name:string;

    @Column({
        type:DataType.STRING(200),
        allowNull:false,
    })
    last_name:string;

    @Column({})
    age:number;

    @Column({
        type:DataType.STRING(200),
        allowNull:false,
    })
    hobby:string;
    
}
