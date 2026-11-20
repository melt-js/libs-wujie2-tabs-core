/**
 * @typedef {object} WujieTab
 * @property {string} id Stable tab identity; several tabs may share a Wujie app.
 * @property {string} title
 * @property {string} fullPath Host route, including query and hash.
 * @property {boolean} [pinned] Pinned tabs are kept by all close operations.
 * @property {boolean} [fixed] A permanent tab cannot be closed, unpinned, or moved.
 */
/** @typedef {Readonly<{tabs: readonly Readonly<WujieTab>[], activeId: string | null}>} WujieTabsState */
/** @typedef {(state: WujieTabsState) => void} WujieTabsListener */
/**
 * Create an independent tab manager. Routing and sandbox lifetime are controlled by the host.
 * @param {{initialTabs?: readonly WujieTab[], activeId?: string} } [options]
 */
export function createWujieTabs({ initialTabs, activeId }?: {
    initialTabs?: readonly WujieTab[];
    activeId?: string;
}): {
    getState: () => Readonly<{
        tabs: readonly Readonly<WujieTab>[];
        activeId: string | null;
    }>;
    /** @param {WujieTabsListener} listener */
    subscribe(listener: WujieTabsListener): () => void;
    open: (tab: WujieTab) => void;
    activate: (id: string | null) => void;
    getCloseFallback: (id: string, ids?: Iterable<string>) => Readonly<WujieTab> | undefined;
    /** @param {string} id */
    close: (id: string) => void;
    closeTabs: (ids: Iterable<string>) => void;
    getCloseTabIds: (id: string | undefined, mode: "left" | "right" | "other" | "all") => string[];
    setPinned: (id: string, pinned: boolean) => void;
    moveTab: (id: string, targetId: string) => void;
    closeOthers: (id: string) => void;
    closeAll: () => void;
};
export type WujieTab = {
    /**
     * Stable tab identity; several tabs may share a Wujie app.
     */
    id: string;
    title: string;
    /**
     * Host route, including query and hash.
     */
    fullPath: string;
    /**
     * Pinned tabs are kept by all close operations.
     */
    pinned?: boolean | undefined;
    /**
     * A permanent tab cannot be closed, unpinned, or moved.
     */
    fixed?: boolean | undefined;
};
export type WujieTabsState = Readonly<{
    tabs: readonly Readonly<WujieTab>[];
    activeId: string | null;
}>;
export type WujieTabsListener = (state: WujieTabsState) => void;
export type WujieTabsManager = ReturnType<typeof createWujieTabs>;
