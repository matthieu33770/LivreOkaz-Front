import { TestBed } from '@angular/core/testing';

import { EditeurDataService } from './editeur-data.service';

describe('EditeurDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditeurDataService = TestBed.get(EditeurDataService);
    expect(service).toBeTruthy();
  });
});
