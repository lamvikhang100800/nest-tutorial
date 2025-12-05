import { AuditFields } from 'src/common/traits/auditable.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    DeleteDateColumn
} from 'typeorm';


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    name: string;

    @Column({ unique: true, length: 150 })
    email: string;

    @Column({ type: 'datetime', nullable: true })
    email_verified_at: Date | null;

    @Column({ length: 255 })
    password: string;

    @Column(type => AuditFields, { prefix: false })
    audit: AuditFields;


    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date | null; // Soft Delete (TypeORM sẽ tự động thêm WHERE deleted_at IS NULL)

    @Column({ type: 'varchar', nullable: true })
    deleted_by: string | null; // ID của người xóa
}