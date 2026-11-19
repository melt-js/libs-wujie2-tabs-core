export interface WujieTab {
  /** 稳定页签标识：子应用页签用「应用名::路由路径」，主应用页签用普通字符串。 */
  id: string
  title: string
  /** 宿主路由，含 query 与 hash。 */
  fullPath: string
  /** 固定页签不会被任何关闭操作移除。 */
  pinned?: boolean
}

export interface WujieTabsState {
  readonly tabs: readonly Readonly<WujieTab>[]
  readonly activeId: string | null
}

export type WujieTabsListener = (state: WujieTabsState) => void

export interface WujieTabsManager {
  getState(): WujieTabsState
  subscribe(listener: WujieTabsListener): () => void
  open(tab: WujieTab): void
  activate(id: string | null): void
  getCloseFallback(id: string): Readonly<WujieTab> | undefined
  close(id: string): void
  closeOthers(id: string): void
  closeAll(): void
}

export declare function createWujieTabs(options?: {
  initialTabs?: readonly WujieTab[]
  activeId?: string
}): WujieTabsManager

/** 页签 id 中应用名与路由路径的分隔符。 */
export declare const TAB_ID_SEPARATOR: '::'

export declare function tabIdOf(app: string, path: string): string

export declare function parseTabId(id: string): { app: string | null; path: string | null }

/**
 * 页面级保活判定：`keepAlive` 不为 false 时始终挂载；
 * 否则只在激活页签属于本应用且路径一致时挂载。
 */
export declare function shouldMountPage(options: {
  keepAlive?: boolean
  path: string
  selfApp?: string | null
  active?: { app?: string | null; path?: string | null } | null
}): boolean

/**
 * 等待 wujie 注入 props（含 routeBridge）。宿主 props 可能晚于子应用模块执行，
 * 直接读 `window.$wujie.props` 会拿到 undefined，导致主子应用路由不同步。
 */
export declare function onWujieProps(
  callback: (props: Record<string, any>) => void,
  options?: { retries?: number; interval?: number },
): void
