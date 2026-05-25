type __VLS_Props = {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'search';
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    type: "text" | "password" | "email" | "number" | "search";
    modelValue: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ZInput.vue.d.ts.map