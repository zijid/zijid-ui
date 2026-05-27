type __VLS_Props = {
    title?: string;
    modelValue?: boolean;
    minimized?: boolean;
    maximized?: boolean;
    focused?: boolean;
    zIndex?: number;
    x?: number;
    y?: number;
    draggable?: boolean;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    title?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    focus: (zIndex: number) => any;
    "update:modelValue": (value: boolean) => any;
    close: () => any;
    minimize: () => any;
    maximize: () => any;
    restore: () => any;
    "update:minimized": (value: boolean) => any;
    "update:maximized": (value: boolean) => any;
    "update:focused": (value: boolean) => any;
    "update:zIndex": (value: number) => any;
    "update:x": (value: number) => any;
    "update:y": (value: number) => any;
    "layer-change": (zIndex: number) => any;
    move: (position: {
        x: number;
        y: number;
    }) => any;
    "move-start": (position: {
        x: number;
        y: number;
    }) => any;
    "move-end": (position: {
        x: number;
        y: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onFocus?: ((zIndex: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onMinimize?: (() => any) | undefined;
    onMaximize?: (() => any) | undefined;
    onRestore?: (() => any) | undefined;
    "onUpdate:minimized"?: ((value: boolean) => any) | undefined;
    "onUpdate:maximized"?: ((value: boolean) => any) | undefined;
    "onUpdate:focused"?: ((value: boolean) => any) | undefined;
    "onUpdate:zIndex"?: ((value: number) => any) | undefined;
    "onUpdate:x"?: ((value: number) => any) | undefined;
    "onUpdate:y"?: ((value: number) => any) | undefined;
    "onLayer-change"?: ((zIndex: number) => any) | undefined;
    onMove?: ((position: {
        x: number;
        y: number;
    }) => any) | undefined;
    "onMove-start"?: ((position: {
        x: number;
        y: number;
    }) => any) | undefined;
    "onMove-end"?: ((position: {
        x: number;
        y: number;
    }) => any) | undefined;
}>, {
    title: string;
    draggable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ZWindow.vue.d.ts.map