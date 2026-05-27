import { IconName } from '../icon/icons';
export type ContextMenuItem = {
    id: string;
    label?: string;
    icon?: IconName;
    disabled?: boolean;
    separator?: boolean;
};
type __VLS_Props = {
    visible?: boolean;
    x: number;
    y: number;
    items: ContextMenuItem[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ZContextMenu.vue.d.ts.map