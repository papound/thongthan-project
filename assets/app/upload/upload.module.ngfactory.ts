/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './upload.module';
import * as import2 from '@angular/core/src/di/injector';
class FUModuleInjector extends import0.NgModuleInjector<import1.FUModule> {
  _FUModule_0:import1.FUModule;
  constructor(parent:import2.Injector) {
    super(parent,[],[]);
  }
  createInternal():import1.FUModule {
    this._FUModule_0 = new import1.FUModule();
    return this._FUModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.FUModule)) { return this._FUModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const FUModuleNgFactory:import0.NgModuleFactory<import1.FUModule> = new import0.NgModuleFactory(FUModuleInjector,import1.FUModule);