import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 70 })
  name: string

  @Column({ length: 256 })
  email: string

  @Column({ length: 18 })
  phone: string

  @CreateDateColumn({ type: "date" })
  createdAt: string

  @DeleteDateColumn({ type: "date" })
  deletedAt: string

  @ManyToOne(() => User, (user) => user.id)
  user: User
}

export default Contact