type __VLS_Props = {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    maxlength?: number;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    isError?: boolean;
    errorMessage?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    clear: () => any;
    change: (event: Event) => any;
    keydown: (event: KeyboardEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
}>, {
    modelValue: string;
    rows: number;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    resize: 'none' | 'vertical' | 'horizontal' | 'both';
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
