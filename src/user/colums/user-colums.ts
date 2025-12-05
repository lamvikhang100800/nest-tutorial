import { I18nService } from 'nestjs-i18n';

export const UserColumns = (i18n: I18nService) => [
    {
        field: 'id',
        label: i18n.translate('field.id'),
        sortable: true,
        editable: false
    },
    {
        field: 'name',
        label: i18n.translate('field.name'),
        sortable: true,
        editable: true
    },
    {
        field: 'email',
        label: i18n.translate('field.email'),
        sortable: true,
        editable: true
    },
    {
        field: 'email_verified_at',
        label: i18n.translate('field.email_verified_at'),
        sortable: true,
        editable: false
    },
    {
        field: 'deleted_at',
        label: i18n.translate('field.deleted_at'),
        sortable: true,
        editable: false
    },
    {
        field: 'deleted_by',
        label: i18n.translate('field.deleted_by'),
        sortable: false,
        editable: false
    },
    {
        field: 'created_at',
        label: i18n.translate('field.created_at'),
        sortable: true,
        editable: false
    },
    {
        field: 'updated_at',
        label: i18n.translate('field.updated_at'),
        sortable: true,
        editable: false
    }
];
