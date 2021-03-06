Ext.require('Ext.*')
import { getRoutes } from '@sencha/ext-web-components-router/lib/ext-router.component';
import '@sencha/ext-web-components/lib/ext-button.component';
import '@sencha/ext-web-components/lib/ext-dialog.component';
import '@sencha/ext-web-components/lib/ext-dataview.component';
import '@sencha/ext-web-components/lib/ext-searchfield.component';
import '@sencha/ext-web-components/lib/ext-treelist.component';
import '@sencha/ext-web-components/lib/ext-panel.component';
import '@sencha/ext-web-components/lib/ext-tabpanel.component';
import '@sencha/ext-web-components/lib/ext-titlebar.component';
import '@sencha/ext-web-components/lib/ext-toolbar.component';
import '@sencha/ext-web-components/lib/ext-column.component';
import '@sencha/ext-web-components/lib/ext-grid.component';
import '@sencha/ext-web-components/lib/ext-container.component';
import '@sencha/ext-web-components/lib/ext-tooltip.component';
import '@sencha/ext-web-components/lib/ext-menu.component';
import '@sencha/ext-web-components/lib/ext-menuitem.component';
import '@sencha/ext-web-components/lib/ext-widgetcell.component';
import '@sencha/ext-web-components/lib/ext-sparklineline.component';
import '@sencha/ext-web-components/lib/ext-numberfield.component';

import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

function init() {
  window.menu = getMenu();
  window.routes = getRoutes(window.menu);
  window.main = new MainComponent();
  document.body.innerHTML = window._code['main']['MainComponent.html']
}

init();
