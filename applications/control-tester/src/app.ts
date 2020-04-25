import { autoinject } from 'aurelia-framework';
import { ControlFactory, ControlSet } from '@control-set/factory';
import { ViewStateMode } from '@control-set/common';

@autoinject
export class App {
    public message = 'Hello World!';
    private controlSet: ControlSet = null;
    constructor(private controlFactory: ControlFactory) {}

    async bind(): Promise<void> {
        const controls = [
            {
                type: 'label',
                value: 'BLAH',
                id: 'lb1'
            }
        ];

        this.controlSet = await this.controlFactory.loadControls(
            {
                controls: controls,
                viewStateMode: ViewStateMode.general,
                fileController: null,
                log: true,
                validateImmediately: false,
                id: '1'
            },
            this
        );
    }
}
