import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProdutosComponent } from './crud-produtos.component';

describe('CrudProdutosComponent', () => {
  let component: CrudProdutosComponent;
  let fixture: ComponentFixture<CrudProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
