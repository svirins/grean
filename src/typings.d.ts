type CSSModule = Record<string, string>;

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module 'rehype-react' {
  interface RehypeOptions {
    createElement: any;
    components: any;
  }
  class RehypeReact {
    Compiler: any;
    constructor(options: RehypeOptions);
  }
  export default RehypeReact;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*png';
declare module '*.webp';
declare module 'commentbox.io';
declare module 'react-instantsearch-dom';
declare module 'gatsby-plugin-disqus';
declare module 'gatsby-plugin-mailchimp';
declare module '@typeform/embed';
