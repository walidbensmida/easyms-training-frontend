import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditFormComponent } from './client-edit-form.component';

describe('ClientEditFormComponent', () => {
  let component: ClientEditFormComponent;
  let fixture: ComponentFixture<ClientEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
