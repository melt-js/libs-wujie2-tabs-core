/** @param {string} app @param {string} path */
export function tabIdOf(app: string, path: string): string;
/** @param {string} id */
export function parseTabId(id: string): {
    app: string | null;
    path: string | null;
};
/**
 * 页签 id 的编解码。约定 `应用名::路由路径`，主应用自己的页签（首页等）不带分隔符。
 * 宿主与子应用共用这套规则，避免各自 `split('::')` 造成判定漂移。
 */
export const TAB_ID_SEPARATOR: "::";
