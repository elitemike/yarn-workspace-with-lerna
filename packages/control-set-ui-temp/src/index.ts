import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';
import { ConfigBuilder } from 'aurelia-syncfusion-ej2-bridge';

export function configure(config: FrameworkConfiguration): void {
    config.globalResources([PLATFORM.moduleName('./myElement')]);

    config.aurelia.use.plugin(PLATFORM.moduleName('aurelia-syncfusion-ej2-bridge'), (config: ConfigBuilder) => {
        config.useDefaults();
    });
}
