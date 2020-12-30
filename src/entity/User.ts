import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity({name:"users",synchronize: true})
export class User {

    @PrimaryGeneratedColumn()
    @PrimaryColumn()
    id: number;

    @Column("varchar",{name:"name"})
    firstName: string;

    @Column("varchar",{name:"last_name"})
    lastName: string;

    @Column("varchar",{name:"email"})
    email: string;

    @Column("varchar",{name:"honeywell_id"})
    honeywellId: string

}
