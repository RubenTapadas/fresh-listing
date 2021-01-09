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
  navExpanded = 'opened';
  filters = {};

  constructor(private listsService: ListsService, private dialog: MatDialog) {}

  ngOnInit() {
    const navExpanded = localStorage.getItem('navExpanded');
    this.navExpanded = navExpanded != null ? navExpanded : 'opened';

    const activeListId = localStorage.getItem('activeListId');
    if (activeListId) {
      this.listsService.initialSetActiveList(parseInt(activeListId));
    }

    this.activeList$.subscribe((l) => {
      console.log('sss');
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
    this.applyFilters();
  }

  changeFilter(field: Field, value) {
    this.filters = {
      ...this.filters,
      [field.id]: value?.toLowerCase(),
    };

    this.applyFilters();
  }

  applyFilters() {
    const filters = this.filters;
    if (filters) {
      this.activeList$.pipe(take(1)).subscribe((l: List) => {
        const list = { ...l };

        const entries = l.entries
          .map((entry) => {
            let allPassed = true;
            l.fields.forEach((field) => {
              const targetField = filters[field.id];
              if (targetField && targetField !== '') {
                const targetEntryField = entry[field.id]?.toLowerCase();
                if (
                  !targetEntryField ||
                  !targetEntryField.includes(targetField.toLowerCase())
                ) {
                  allPassed = false;
                }
              }
            });

            return allPassed ? entry : null;
          })
          .filter((v) => v);

        list.entries = entries;

        const fieldId = this.changeOrderValue;
        const order = this.orderDirection;

        const sortedEntries = list.entries.sort((a, b) => {
          if (parseInt(a[fieldId])) {
            if (order === 'des') {
              return parseInt(a[fieldId]) < parseInt(b[fieldId]) ? 1 : -1;
            } else {
              return parseInt(a[fieldId]) > parseInt(b[fieldId]) ? 1 : -1;
            }
          } else {
            if (order === 'des') {
              return a[fieldId] < b[fieldId] ? 1 : -1;
            } else {
              return a[fieldId] > b[fieldId] ? 1 : -1;
            }
          }
        });

        this.filterActiveList = { ...list, sortedEntries };
      });
    }
  }

  changeOrderDirection() {
    if (this.orderDirection === 'asc') {
      this.orderDirection = 'des';
    } else {
      this.orderDirection = 'asc';
    }

    this.changeOrder(this.changeOrderValue);
  }

  toggleSideBar() {
    switch (this.navExpanded) {
      case 'opened':
        this.navExpanded = 'closed';
        localStorage.setItem('navExpanded', 'closed');
        break;
      default:
        this.navExpanded = 'opened';
        localStorage.setItem('navExpanded', 'opened');
        break;
    }
  }
}
