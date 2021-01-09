import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { EntryDialogComponent } from './components/entry-dialog/entry-dialog.component';
import { ListDialogComponent } from './components/list-dialog/list-dialog.component';
import { Field, List } from './models/lists';
import { ListsService } from './services/lists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'fresh-listing';

  lists$ = this.listsService.lists$;

  activeList$ = this.listsService.activeList$;
  filterActiveList;

  filters$ = new BehaviorSubject<any>({});

  orderDirection: 'asc' | 'des' = 'asc';
  changeOrderValue: number;

  constructor(private listsService: ListsService, private dialog: MatDialog) {}

  ngOnInit() {
    const activeListId = localStorage.getItem('activeListId');
    if (activeListId) {
      this.listsService.initialSetActiveList(parseInt(activeListId));
    }

    this.activeList$.subscribe((l) => {
      if (l) {
        this.filters$.next(
          l.fields.map((f) => {
            return { [f.label]: null };
          })
        );

        this.filterActiveList = l;
      }
    });
  }

  createList() {
    this.dialog.open(ListDialogComponent, {
      width: '500px',
      disableClose: true,
    });
  }

  editList(list: List) {
    this.dialog.open(ListDialogComponent, {
      width: '500px',
      disableClose: true,
      data: list,
    });
  }

  openList(list) {
    this.listsService.updateActiveList(list);
  }

  createEntry() {
    this.activeList$.pipe(take(1)).subscribe((activeList) =>
      this.dialog.open(EntryDialogComponent, {
        width: '500px',
        disableClose: true,
        data: { list: activeList },
      })
    );
  }

  editEntry(entry) {
    this.activeList$.pipe(take(1)).subscribe((activeList) =>
      this.dialog.open(EntryDialogComponent, {
        width: '500px',
        disableClose: true,
        data: { list: activeList, entry },
      })
    );
  }

  findField(fieldId: string, list: List) {
    return list.fields.find((e) => e.id === parseInt(fieldId))?.label;
  }

  changeOrder(fieldId: number) {
    this.changeOrderValue = fieldId;
    this.listsService.changeOrder(fieldId, this.orderDirection);
  }

  changeFilter(field: Field, value) {
    this.activeList$.pipe(take(1)).subscribe((l: List) => {
      const list = { ...l };
      const entries =
        !value || value === ''
          ? list.entries
          : list.entries.filter((e) =>
              e[field.id]?.toLowerCase().includes(value.toLowerCase())
            );

      list.entries = entries;
      this.filterActiveList = list;
    });
  }

  changeOrderDirection() {
    if (this.orderDirection === 'asc') {
      this.orderDirection = 'des';
    } else {
      this.orderDirection = 'asc';
    }

    this.changeOrder(this.changeOrderValue);
  }
}
