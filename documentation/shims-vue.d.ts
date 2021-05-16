declare module '*.vue' {
  import { DefineComponent, ComponentOptions } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {

  const component: ComponentOptions;
  export default component;
}
