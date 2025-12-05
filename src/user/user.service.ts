import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { UserQuery } from './queries/user.query';
import { UserResource } from './resources/user.resource';
import { UserColumns } from './colums/user-colums';

@Injectable()
export class UserService {
    constructor(
        private readonly userQuery: UserQuery,
        private readonly i18n: I18nService
    ) { }

    // user.service.ts
    async list(request: any) {
        const { page, limit, filters, sort } = request;

        let qb = this.userQuery.baseQuery();
        qb = this.userQuery.filter(qb, filters);
        qb = this.userQuery.sort(qb, sort);

        const { items, meta } = await this.userQuery.paginate(qb, page, limit);

        return {
            columns: UserColumns(this.i18n),
            payload: UserResource.list(items, meta, this.i18n),
        };
    }

}
