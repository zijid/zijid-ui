type __VLS_Props = {
    visible?: boolean;
    title?: string;
    message: string;
    type?: 'info' | 'success' | 'warning' | 'error';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visible": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
}>, {
    type: "info" | "success" | "warning" | "error";
    visible: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ZToast.vue.d.ts.map