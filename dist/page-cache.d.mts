/**
 * 页面级保活判定。
 *
 * wujie 的 `alive` 是应用级开关：它保证子应用实例不被销毁，但无法区分同一个子应用下的
 * 不同页面。因此「这个页面此刻该不该挂载」交给子应用按宿主广播的激活页签自己判断：
 * 标记 `keepAlive: false` 的页面只在所属页签处于激活态时存在，切走即卸载、切回重建。
 *
 * @param {{ keepAlive?: boolean, path: string, selfApp?: string | null,
 *   active?: { app?: string | null, path?: string | null } | null }} options
 */
export function shouldMountPage({ keepAlive, path, selfApp, active }: {
    keepAlive?: boolean;
    path: string;
    selfApp?: string | null;
    active?: {
        app?: string | null;
        path?: string | null;
    } | null;
}): boolean;
