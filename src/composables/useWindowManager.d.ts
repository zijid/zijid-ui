import type { IconName } from '../components/icon/icons';
export type ManagedWindow = {
    id: string;
    title: string;
    icon?: IconName;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    active: boolean;
    zIndex: number;
    x: number;
    y: number;
};
export declare function useWindowManager(initialWindows?: Array<Partial<ManagedWindow> & {
    id: string;
    title: string;
}>): {
    windows: import("vue").Ref<{
        id: string;
        title: string;
        icon?: IconName | undefined;
        visible: boolean;
        minimized: boolean;
        maximized: boolean;
        active: boolean;
        zIndex: number;
        x: number;
        y: number;
    }[], ManagedWindow[] | {
        id: string;
        title: string;
        icon?: IconName | undefined;
        visible: boolean;
        minimized: boolean;
        maximized: boolean;
        active: boolean;
        zIndex: number;
        x: number;
        y: number;
    }[]>;
    taskbarWindows: import("vue").ComputedRef<{
        id: string;
        title: string;
        icon?: IconName | undefined;
        visible: boolean;
        minimized: boolean;
        maximized: boolean;
        active: boolean;
        zIndex: number;
        x: number;
        y: number;
    }[]>;
    getWindow: (id: string) => {
        id: string;
        title: string;
        icon?: IconName | undefined;
        visible: boolean;
        minimized: boolean;
        maximized: boolean;
        active: boolean;
        zIndex: number;
        x: number;
        y: number;
    } | undefined;
    open: (id: string) => void;
    close: (id: string) => void;
    minimize: (id: string) => void;
    activate: (id: string) => void;
    toggleMaximize: (id: string, value?: boolean) => void;
    move: (id: string, position: {
        x: number;
        y: number;
    }) => void;
};
//# sourceMappingURL=useWindowManager.d.ts.map