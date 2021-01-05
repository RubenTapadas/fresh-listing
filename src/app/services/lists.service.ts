import { ChangeDetectorRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from '../models/lists';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  lists$ = new BehaviorSubject<List[]>(
    localStorage.getItem('lists')
      ? JSON.parse(localStorage.getItem('lists')).sort((a, b) =>
          a.updateMoment < b.updateMoment ? 1 : -1
        )
      : []
  );

  activeList$ = new BehaviorSubject<List | {}>({});

  newList(list: List) {
    const newList = {
      ...list,
      updateMoment: new Date().getTime(),
    };

    const lists = [...this.lists$.value, newList].sort((a, b) =>
      a.updateMoment < b.updateMoment ? 1 : -1
    );

    localStorage.setItem('lists', JSON.stringify(lists));

    this.lists$.next(lists);
  }

  editList(list: List) {
    const newList = {
      ...list,
      updateMoment: new Date().getTime(),
    };

    const lists = [
      ...this.lists$.value.filter((l) => l.id !== list.id),
      newList,
    ].sort((a, b) => (a.updateMoment < b.updateMoment ? 1 : -1));

    localStorage.setItem('lists', JSON.stringify(lists));
    this.lists$.next(lists);
  }

  eraseList(list: List) {
    const lists = [
      ...this.lists$.value.filter((l) => l.id !== list.id),
    ].sort((a, b) => (a.updateMoment < b.updateMoment ? 1 : -1));

    localStorage.setItem('lists', JSON.stringify(lists));
    this.lists$.next(lists);
  }

  updateActiveList(list: List) {
    this.activeList$.next(list);
  }
}
