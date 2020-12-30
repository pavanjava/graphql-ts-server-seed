import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name:"users",schema:"user_mgmt", synchronize: false})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:"name"})
    firstName: string;

    @Column({name:"last_name"})
    lastName: string;

    @Column({name:"email"})
    email: string;

    @Column({name:"honeywell_id"})
    honeywellId: string

}
