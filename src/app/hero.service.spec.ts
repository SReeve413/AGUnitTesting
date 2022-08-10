import { inject, TestBed } from "@angular/core/testing"
import { HeroService } from "./hero.service"
import { MessageService } from "./message.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"

describe('HeroService', () => {
let mockMessageService;
let httpTestingController: HttpTestingController;
let service: HeroService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add'])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessageService}
      ]
    })

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroService);

  })

  describe('getHero', ()=> {
    it('should call get with the correct URL', inject(
      [HeroService],
      (service: HeroService, controller: HttpTestingController) => {
      //call getHero()
      service.getHero(4);
      //test that the URL was correct

    }))
  })
})
