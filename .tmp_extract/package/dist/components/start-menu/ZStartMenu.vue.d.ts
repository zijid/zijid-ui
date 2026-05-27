import { IconName } from '../icon/icons';
type __VLS_Props = {
    visible?: boolean;
    search?: string;
    apps: Array<{
        id: string;
        title: string;
        icon?: IconName;
    }>;
};
declare var __VLS_4: {};
type __VLS_Slots = {} & {
    footer?: (props: typeof __VLS_4) => any;
};
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: (id: string) => any;
    "update:search": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpen?: ((id: string) => any) | undefined;
    "onUpdate:search"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ZStartMenu.vue.d.ts.map