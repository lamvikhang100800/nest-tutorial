
import { Column } from 'typeorm';

export class  AuditFields {

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;


  @Column({ type: 'varchar', nullable: true, length: 50 })
  created_by: string | null;

  @Column({ type: 'varchar', nullable: true, length: 50 })
  updated_by: string | null;
}