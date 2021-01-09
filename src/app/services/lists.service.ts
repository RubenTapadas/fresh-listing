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
          a.name > b.name ? 1 : -1
        )
      : []
  );

  activeList$ = new BehaviorSubject<List>(null);

  newList(list: List) {
    const newList = {
      ...list,
      updateMoment: new Date().getTime(),
    };

    const lists = [...this.lists$.value, newList].sort((a, b) =>
      a.name > b.name ? 1 : -1
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
    ].sort((a, b) => (a.name > b.name ? 1 : -1));

    localStorage.setItem('lists', JSON.stringify(lists));
    this.lists$.next(lists);
  }

  eraseList(list: List, clearActiveList = true) {
    const lists = [...this.lists$.value.filter((l) => l.id !== list.id)];

    localStorage.setItem('lists', JSON.stringify(lists));
    this.lists$.next(lists);

    if (clearActiveList) {
      this.activeList$.next(null);
    }
  }

  updateActiveList(list: List) {
    localStorage.setItem('activeListId', list.id + '');
    this.activeList$.next(list);
  }

  initialSetActiveList(listId: number) {
    const targetList = this.lists$.value.find((l) => l.id === listId);
    this.activeList$.next(targetList);
  }

  addEntry(list: List, entry: any) {
    const filterList = this.lists$.value.filter((l) => l.id !== list.id);
    list.entries = [...list.entries, entry];
    const newLists = [...filterList, list];

    localStorage.setItem('lists', JSON.stringify(newLists));
    this.lists$.next(newLists);
  }

  editEntry(list: List, entry: any) {
    const filterList = this.lists$.value.filter((l) => l.id !== list.id);
    list.entries = [...list.entries.filter((e) => e.id !== entry.id), entry];
    const newLists = [...filterList, list];

    localStorage.setItem('lists', JSON.stringify(newLists));
    this.lists$.next(newLists);
  }

  deleteEntry(list: List, entry: any) {
    const filterList = this.lists$.value.filter((l) => l.id !== list.id);
    list.entries = [...list.entries.filter((e) => e.id !== entry.id)];
    const newLists = [...filterList, list];

    localStorage.setItem('lists', JSON.stringify(newLists));
    this.lists$.next(newLists);
  }
}
