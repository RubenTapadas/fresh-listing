import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { List } from 'src/app/models/lists';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss'],
})
export class EntryDialogComponent implements OnInit {
  mode: 'create' | 'edit';

  control = new FormControl();
  fieldvalues: string[];
  autocompleteEntry$: Observable<string[]>;

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

    console.log(this.mode, this.data.entry, this.data.list.fields);

    this.fieldvalues = this.data.list.entries
      .map((e) => [e[2], e[3], e[4], e[5], e[6], e[7], e[8]])
      .flat()
      .filter((v) => v);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.fieldvalues.filter((entry) =>
      this._normalizeValue(entry).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  findEntry(label: string) {
    if (this.mode === 'edit') {
      this.data.entry;
    } else {
      return null;
    }
  }

  updateAuto(value) {
    this.autocompleteEntry$ = of(this._filter(value));
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
    if (this.data.list.entries.find((e) => e['2'] === this.data.entry['2'])) {
      window.alert('An entry with the same name already exists');
    } else {
      if (this.data.entry) {
        this.listsService.addEntry(this.data.list, this.data.entry);
        this.dialogRef.close();
      }
    }
  }

  edit() {
    if (
      this.data.list.entries.find(
        (e) => e['2'] === this.data.entry['2'] && e.id !== this.data.entry.id
      )
    ) {
      window.alert('An entry with the same name already exists');
    } else {
      this.listsService.editEntry(this.data.list, this.data.entry);
      this.dialogRef.close();
    }
  }

  erase() {
    this.listsService.deleteEntry(this.data.list, this.data.entry);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
