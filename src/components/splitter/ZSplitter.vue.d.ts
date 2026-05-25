type __VLS_Props = {
    modelValue?: number;
    direction?: 'horizontal' | 'vertical';
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    first?: (props: typeof __VLS_1) => any;
} & {
    second?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    modelValue: number;
    direction: "horizontal" | "vertical";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ZSplitter.vue.d.ts.map