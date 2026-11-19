/**
 * 等待 wujie 注入 props。
 *
 * 宿主的 props 可能晚于子应用模块执行：模块顶层直接读 `window.$wujie?.props?.routeBridge`
 * 会拿到 undefined，路由桥接因此注册不上，表现为「点了菜单、页签也变了，但页面没反应」。
 * 这里做有限次轮询，拿到带 `routeBridge` 的 props 后回调一次。
 *
 * @param {(props: Record<string, any>) => void} callback
 * @param {{ retries?: number, interval?: number }} [options]
 */
export function onWujieProps(callback: (props: Record<string, any>) => void, { retries, interval }?: {
    retries?: number;
    interval?: number;
}): void;
