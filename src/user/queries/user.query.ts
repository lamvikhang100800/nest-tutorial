// user.query.ts
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserQuery {
    constructor(private readonly dataSource: DataSource) {}

    baseQuery() {
        return this.dataSource
            .getRepository(User)
            .createQueryBuilder('u')
            // .leftJoinAndSelect('u.role', 'role');
    }

    filter(qb, filters: any) {
        if (!filters) return qb;
        console.log('Filters:', filters);
        if (filters.name) {
            qb.andWhere('u.name LIKE :name', { name: `%${filters.name}%` });
        }

        if (filters.status) {
            qb.andWhere('u.status = :status', { status: filters.status });
        }

        return qb;
    }

    sort(qb, sort: any) {
        if (!sort) return qb;

        Object.entries(sort).forEach(([key, direction]) => {
            qb.addOrderBy(`u.${key}`, direction as 'ASC' | 'DESC');
        });

        return qb;
    }

    async paginate(qb, page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        const [items, total] = await qb.skip(skip).take(limit).getManyAndCount();

        return {
            items,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
}
