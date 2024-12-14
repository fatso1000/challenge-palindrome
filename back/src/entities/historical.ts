import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Historical {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  isPalindrome: boolean;
}
