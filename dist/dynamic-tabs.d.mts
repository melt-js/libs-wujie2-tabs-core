import type { DynamicTabsProps, TabsManager } from './index.mjs'

export declare function mountDynamicTabs(
  root: HTMLElement,
  getOptions: () => DynamicTabsProps & { manager: TabsManager },
  reportError: (error: unknown) => void,
): { update(): void; destroy(): void }
