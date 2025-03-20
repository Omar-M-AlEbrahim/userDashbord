
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/UserDashbord',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23579, hash: '6394f7999de0a3d4190d0470ace0d6e1ca51f1dbc5832b4f7145de248ebcf6fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17153, hash: '05825c88067c4f2849459ece25b2bd3e54caa355660940aab0086756fa1f7a11', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WNKDDIZJ.css': {size: 6979, hash: 'AsSxQJi0uyE', text: () => import('./assets-chunks/styles-WNKDDIZJ_css.mjs').then(m => m.default)}
  },
};
