import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration): void {
    config.globalResources([]);

    config.aurelia.use.plugin(PLATFORM.moduleName('aurelia-validation'));
}
