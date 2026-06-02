import type { IconName } from '../icon/icons';
export type TreeItem = {
    id: string;
    label: string;
    icon?: IconName;
    children?: TreeItem[];
};
type __VLS_Props = {
    modelValue?: string;
    items: TreeItem[];
    defaultExpandedIds?: string[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (id: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ZTree.vue.d.ts.map
