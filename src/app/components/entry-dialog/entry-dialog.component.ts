import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from 'src/app/models/lists';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss'],
})
export class EntryDialogComponent implements OnInit {
  mode: 'create' | 'edit';

  constructor(
    public dialogRef: MatDialogRef<EntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listsService: ListsService
  ) {}

  ngOnInit(): void {
    if (!this.data.entry) {
      this.mode = 'create';
    } else {
      this.mode = 'edit';
    }
  }

  findEntry(label: string) {
    if (this.mode === 'edit') {
      this.data.entry;
    } else {
      return null;
    }
  }

  updateField(field, value) {
    if (!this.data.entry) {
      this.data = {
        ...this.data,
        entry: {
          id:
            this.data.list.entries.length !== 0
              ? this.data.list.entries.sort((a, b) => (a.id < b.id ? 1 : -1))[0]
                  .id + 1
              : 1,
          [field.id]: value,
        },
      };
    } else {
      const biggestId =
        this.data.list.entries.length !== 0
          ? this.data.list.entries.sort((a, b) => (a.id < b.id ? 1 : -1))[0]
              .id + 1
          : 1;

      this.data.entry = {
        id: biggestId,
        ...this.data.entry,
        [field.id]: value,
      };
    }
  }

  create() {
    if (this.data.entry) {
      this.listsService.addEntry(this.data.list, this.data.entry);
      this.dialogRef.close();
    }
  }

  edit() {
    this.listsService.editEntry(this.data.list, this.data.entry);
    this.dialogRef.close();
  }

  erase() {
    this.listsService.deleteEntry(this.data.list, this.data.entry);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
