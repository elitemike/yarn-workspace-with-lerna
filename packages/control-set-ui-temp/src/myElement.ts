import { useView, PLATFORM } from 'aurelia-framework';
@useView(PLATFORM.moduleName('@control-set/ui-temp/myElement.html'))
export class MyElement {
    public message = 'My Custom Element';
}
