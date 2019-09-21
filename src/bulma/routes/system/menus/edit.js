const MenuEdit = () => import('../../../pages/menus/Edit.vue');

export default {
    name: 'system.menus.edit',
    path: ':menu/edit',
    component: MenuEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Menu',
    },
};
