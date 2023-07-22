import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsModuleComponent } from './rxjs-module.component';

describe('RxjsModuleComponent', () => {
  let component: RxjsModuleComponent;
  let fixture: ComponentFixture<RxjsModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsModuleComponent]
    });
    fixture = TestBed.createComponent(RxjsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
