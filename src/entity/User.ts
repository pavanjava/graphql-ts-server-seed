import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, BaseEntity} from "typeorm";

@Entity({name:"users",synchronize: true})
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

    @Column("varchar",{name:"first_name"})
    firstName: string;

    @Column("varchar",{name:"last_name"})
    lastName: string;

    @Column("varchar",{name:"email"})
    email: string;

    @Column("varchar",{name:"password"})
    password: string

}
