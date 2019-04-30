# megalo-rich-text

基于 rich-text 的跨平台富文本解析，支持 微信/百度/支付宝/头条 小程序

## 如何使用

```js
// ./build/createBaseConfig.js

target: createMegaloTarget( {
  compiler: Object.assign( compiler, { } ),
  platform,
  htmlParse: {
    templateName: 'rich-text',
    src: _.resolve(`./node_modules/megalo-rich-text/dist/platform/${platform}`)
  }
} ),
````

```js
// ./src/index.js

import Vue from 'vue';
import VHtmlPlugin from 'megalo-rich-text';

Vue.use(VHtmlPlugin);

```

```html
// ./pages/index/index.vue

<template>
  <div class="app">
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: `
        <img src="https://pop.nosdn.127.net/e2170dcf-efd0-4906-9da9-3a9900e52b39"/><br/>
        <img src="https://pop.nosdn.127.net/929408c3-7a72-44d2-9b11-8d5c6ea98dbb"/><br/>
        <span>
          <span>test</span><br/><span>test2</span>
        </span>
      `,
    }
  },
  created() {
  },
}
</script>
```
