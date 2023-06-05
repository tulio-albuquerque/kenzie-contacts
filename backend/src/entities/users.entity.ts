import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Contact from "./contacts.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 70 })
  name: string

  @Column({ length: 256 })
  email: string

  @Column({ length: 120 })
  password: string

  @Column({ length: 18 })
  phone: string

  @Column({ type: "boolean", default: false})
  admin: boolean

  @CreateDateColumn({ type: "date" })
  createdAt: string
  
  @DeleteDateColumn({ type: "date" })
  deletedAt: string

  @OneToMany(() => Contact, (contact) => contact.user, { nullable: true})
  contacts: Contact[]

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password)
    if(!isEncrypted) {
      this.password = hashSync(this.password, 10)
    }
  }
}

export default User