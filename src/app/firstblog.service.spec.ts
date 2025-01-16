import { TestBed } from '@angular/core/testing';

import { FirstblogService } from './firstblog.service';

describe('FirstblogService', () => {
  let service: FirstblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  function loadModule(filename: any, module: any, require:any){
    const wrappedSrc = `(function (module, exports, require){
      fs.readFileSync(filename, 'utf8')}
    })(module, module.export, require)`
    eval(wrappedSrc)
  }
});
