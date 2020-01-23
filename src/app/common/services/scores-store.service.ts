import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ScoresStoreService {
    scores;

    getScores() {
        return this.scores;
    }

    addScores(val) {
        this.scores = val;
    }
}
