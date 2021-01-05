import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { List } from 'src/app/models/lists';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDialogComponent implements OnInit {
  mode: 'create' | 'edit';
  constructor(
    public dialogRef: MatDialogRef<ListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: List,
    private listsService: ListsService
  ) {}

  ngOnInit(): void {
    this.listsService.lists$.pipe(take(1)).subscribe((listsServiceLists) => {
      const biggestId =
        listsServiceLists.length !== 0
          ? listsServiceLists.sort((a, b) => (a.id < b.id ? 1 : -1))[0].id + 1
          : null;

      console.log({ listsServiceLists }, listsServiceLists.length === 0);
      if (!this.data) {
        this.data = {
          id: listsServiceLists.length !== 0 ? biggestId : 1,
          name: '*New List*',
          fields: [
            { id: 1, label: 'Image', disable: true },
            { id: 2, label: 'Name' },
          ],
          entries: {},
        };
        this.mode = 'create';
      } else {
        this.mode = 'edit';
      }
    });
  }

  createField() {
    this.data.fields = [
      ...this.data.fields,
      {
        id: this.data.fields[this.data.fields.length - 1].id + 1,
        label: '*New Field*',
      },
    ];
  }

  changeField(id: number, label: string) {
    this.data.fields.find((field) => field.id === id).label = label;
  }

  cancel() {
    this.dialogRef.close();
  }

  create() {
    this.listsService.lists$.pipe(take(1)).subscribe((listsServiceLists) => {
      if (listsServiceLists.find((list) => list.name === this.data.name)) {
        window.alert('A list with the same name already exists.');
      } else {
        this.listsService.newList(this.data);
        this.dialogRef.close();
      }
    });
  }

  edit() {
    this.listsService.lists$.pipe(take(1)).subscribe((listsServiceLists) => {
      if (
        listsServiceLists.find(
          (list) => list.name === this.data.name && list.id !== this.data.id
        )
      ) {
        window.alert('A list with the same name already exists.');
      } else {
        this.listsService.editList(this.data);
        this.dialogRef.close();
      }
    });
  }

  erase() {
    if (window.confirm('Are you sure you want to delete this list?')) {
      this.listsService.eraseList(this.data);
      this.dialogRef.close();
    }
  }
}
