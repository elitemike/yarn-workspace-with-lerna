import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { App } from 'app';
// import { ConfigBuilder } from 'aurelia-syncfusion-ej2-bridge';

bootstrap(async (aurelia: Aurelia) => {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.use.plugin(PLATFORM.moduleName('@control-set/ui-temp'));

    // eslint-disable-next-line no-undef
    const root = document.getElementById('app-host') as Element;

    await aurelia.start();
    await aurelia.setRoot(App, root);
});
