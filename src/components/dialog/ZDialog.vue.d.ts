type __VLS_Props = {
    modelValue?: boolean;
    title?: string;
    closeOnBackdrop?: boolean;
};
declare var __VLS_8: {}, __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
} & {
    footer?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    confirm: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    title: string;
    closeOnBackdrop: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ZDialog.vue.d.ts.map