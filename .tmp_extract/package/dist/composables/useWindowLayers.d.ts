export type WindowLayerEntry = {
    id: string;
    setLayer?: (zIndex: number) => void;
    setActive?: (active: boolean) => void;
};
export type WindowLayerState = {
    id: string;
    zIndex: number;
    active: boolean;
};
export type WindowLayerManagerOptions = {
    baseIndex?: number;
};
export declare function createWindowLayerManager(options?: WindowLayerManagerOptions): {
    layers: import('vue').ComputedRef<WindowLayerState[]>;
    activeId: import('vue').ComputedRef<string | undefined>;
    register: (entry: WindowLayerEntry) => void;
    unregister: (id: string) => void;
    activate: (id: string) => void;
    getLayer: (id: string) => WindowLayerState | undefined;
};
export declare const globalWindowLayerManager: {
    layers: import('vue').ComputedRef<WindowLayerState[]>;
    activeId: import('vue').ComputedRef<string | undefined>;
    register: (entry: WindowLayerEntry) => void;
    unregister: (id: string) => void;
    activate: (id: string) => void;
    getLayer: (id: string) => WindowLayerState | undefined;
};
export declare function useWindowLayers(options?: WindowLayerManagerOptions): {
    layers: import('vue').ComputedRef<WindowLayerState[]>;
    activeId: import('vue').ComputedRef<string | undefined>;
    register: (entry: WindowLayerEntry) => void;
    unregister: (id: string) => void;
    activate: (id: string) => void;
    getLayer: (id: string) => WindowLayerState | undefined;
};
//# sourceMappingURL=useWindowLayers.d.ts.map