/** @typedef {import('./runtime.mjs').WujieTab} WujieTab */
/** @typedef {void | boolean | Promise<void | boolean>} TabActionResult */
/** @typedef {{
 *   openTab?: (tab: WujieTab) => TabActionResult,
 *   changeActiveTab?: (id: string) => TabActionResult,
 *   closeTabs?: (ids: string[]) => TabActionResult,
 *   refreshTab?: (id: string) => TabActionResult,
 *   refreshTabAll?: () => TabActionResult,
 *   openDetachedTab?: (id: string) => TabActionResult,
 * }} WujieTabActions */
/** @param {NonNullable<Parameters<typeof createWujieTabs>[0]> & {actions?: WujieTabActions}} [options] */
export function createTabsManager({ actions, ...options }?: NonNullable<Parameters<typeof createWujieTabs>[0]> & {
    actions?: WujieTabActions;
}): {
    openTab: (tab: import("./runtime.mjs").WujieTab) => void;
    changeActiveTab: (id: string) => TabActionResult;
    /** @param {string} [id] */
    closeTab(id?: string): TabActionResult;
    /** @param {string} [id] */
    closeTabsByLeft(id?: string): TabActionResult;
    /** @param {string} [id] */
    closeTabsByRight(id?: string): TabActionResult;
    /** @param {string} [id] */
    closeTabsByOther(id?: string): Promise<boolean | void>;
    closeTabByAll(): TabActionResult;
    /** @param {{_viewPinned?: boolean}} options @param {string} [id] */
    updateTabOptions({ _viewPinned }: {
        _viewPinned?: boolean;
    }, id?: string): void;
    refreshTab: ((id: string) => TabActionResult) | undefined;
    refreshTabAll: (() => TabActionResult) | undefined;
    openDetachedTab: ((id: string) => TabActionResult) | undefined;
    getState: () => Readonly<{
        tabs: readonly Readonly<import("./runtime.mjs").WujieTab>[];
        activeId: string | null;
    }>;
    subscribe(listener: WujieTabsListener): () => void;
    open: (tab: import("./runtime.mjs").WujieTab) => void;
    activate: (id: string | null) => void;
    getCloseFallback: (id: string, ids?: Iterable<string>) => Readonly<import("./runtime.mjs").WujieTab> | undefined;
    close: (id: string) => void;
    closeTabs: (ids: Iterable<string>) => void;
    getCloseTabIds: (id: string | undefined, mode: "left" | "right" | "other" | "all") => string[];
    setPinned: (id: string, pinned: boolean) => void;
    moveTab: (id: string, targetId: string) => void;
    closeOthers: (id: string) => void;
    closeAll: () => void;
};
export type WujieTab = import("./runtime.mjs").WujieTab;
export type TabActionResult = void | boolean | Promise<void | boolean>;
export type WujieTabActions = {
    openTab?: (tab: WujieTab) => TabActionResult;
    changeActiveTab?: (id: string) => TabActionResult;
    closeTabs?: (ids: string[]) => TabActionResult;
    refreshTab?: (id: string) => TabActionResult;
    refreshTabAll?: () => TabActionResult;
    openDetachedTab?: (id: string) => TabActionResult;
};
export type TabsManager = ReturnType<typeof createTabsManager>;
import { createWujieTabs } from './runtime.mjs';
