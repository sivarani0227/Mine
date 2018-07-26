import { TestBed, inject } from '@angular/core/testing';

import { Agent.ReviewService } from './agent.review.service';

describe('Agent.ReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Agent.ReviewService]
    });
  });

  it('should be created', inject([Agent.ReviewService], (service: Agent.ReviewService) => {
    expect(service).toBeTruthy();
  }));
});
