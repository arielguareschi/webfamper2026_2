import { TestBed } from '@angular/core/testing';
import { AlunoLocalService } from './aluno-local';

describe('AlunoLocal', () => {
  let service: AlunoLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
