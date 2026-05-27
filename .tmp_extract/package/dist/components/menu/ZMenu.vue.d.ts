import { IconName } from '../icon/icons';
export type MenuItem = {
    id: string;
    label?: string;
    icon?: IconName;
    shortcut?: string;
    disabled?: boolean;
    separator?: boolean;
};
type __VLS_Props = {
    items: MenuItem[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ZMenu.vue.d.ts.map