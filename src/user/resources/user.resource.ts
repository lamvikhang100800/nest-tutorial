
export class UserResource {
    static toListItem(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            email_verified_at: user.email_verified_at,
            deleted_at: user.deleted_at,
            deleted_by: user.deleted_by,
            created_at: user.audit?.created_at,
            created_by: user.audit?.created_by,
            updated_at: user.audit?.updated_at,
            updated_by: user.audit?.updated_by
        };
    }
    static list(items, meta, i18n) {
        const data = items.map((u) => this.toListItem(u));  
        return {
            data,
            meta,
        };
    }

}
