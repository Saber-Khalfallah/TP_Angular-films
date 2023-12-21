import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnFilmComponent } from './ajouter-un-film.component';

describe('AjouterUnFilmComponent', () => {
  let component: AjouterUnFilmComponent;
  let fixture: ComponentFixture<AjouterUnFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterUnFilmComponent]
    });
    fixture = TestBed.createComponent(AjouterUnFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
