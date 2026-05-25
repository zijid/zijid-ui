export type SelectOption = {
    label: string;
    value: string;
    disabled?: boolean;
};
type __VLS_Props = {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    options: SelectOption[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ZSelect.vue.d.ts.map