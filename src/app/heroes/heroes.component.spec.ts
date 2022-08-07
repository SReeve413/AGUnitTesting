import { of } from "rxjs";

import { HeroesComponent } from "./heroes.component";

describe('HeroesComponet', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroSerivice;

  beforeEach(()=> {
    HEROES = [
      {id:1, name: 'SpiderDude', strength: 8},
      {id:2, name: 'Wonderful Woman', strength: 24},
      {id:3, name: 'SuperDude', strength: 55}
    ]

    mockHeroSerivice = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero'])

    component = new HeroesComponent(mockHeroSerivice)
  })

  describe('delete', () => {
    it('should remove the indicated hero from the heroes list', () => {
      mockHeroSerivice.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2)
    } )
  })

  it('should call deleteHero with correct hero', () => {
    mockHeroSerivice.deleteHero.and.returnValue(of(true))
    component.heroes = HEROES;

    component.delete(HEROES[2]);

    expect(mockHeroSerivice.deleteHero).toHaveBeenCalledWith(HEROES[2]);
  })
})
