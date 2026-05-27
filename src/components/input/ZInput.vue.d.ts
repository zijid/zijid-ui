type __VLS_Props = {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
    disabled?: boolean;
    readonly?: boolean;
    prefix?: string;
    prefixIcon?: IconName;
    suffix?: string;
    suffixIcon?: IconName;
    clearable?: boolean;
    showPassword?: boolean;
    maxlength?: number;
    autocomplete?: string;
    isError?: boolean;
    errorMessage?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    "update:modelValue": (value: string) => any;
    clear: () => any;
    change: (event: Event) => any;
    keydown: (event: KeyboardEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
}>, {
    disabled: boolean;
    readonly: boolean;
    type: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
    modelValue: string;
    clearable: boolean;
    showPassword: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ZInput.vue.d.ts.map
