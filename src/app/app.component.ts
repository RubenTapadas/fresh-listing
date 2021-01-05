import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListDialogComponent } from './components/list-dialog/list-dialog.component';
import { List } from './models/lists';
import { ListsService } from './services/lists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'fresh-listing';

  lists$ = this.listsService.lists$;

  constructor(private listsService: ListsService, private dialog: MatDialog) {}

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
}
