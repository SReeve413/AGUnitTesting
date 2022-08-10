import { Component, Input, NO_ERRORS_SCHEMA, Output } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent (Deep Tests)', ()=>{
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    HEROES = [
      {id:1, name: 'SpiderDude', strength: 8},
      {id:2, name: 'Wonderful Woman', strength: 24},
      {id:3, name: 'SuperDude', strength: 55}
    ]

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroesComponent
      ],
      providers: [
        {provide: HeroService, useValue: mockHeroService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HeroesComponent);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();
  })

  it('should be true', ()=> {
    expect(true).toBe(true);
  })
})
