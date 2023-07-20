import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../interface/menu';
import { ProgramService } from '../dashboard/program.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  @Input() isFav: boolean = false;

  programService = inject(ProgramService);

  programs?: MenuItem[];

  ngOnInit(): void {
    if(this.isFav) {
      this.programService.getFavPrograms().then((datas) => {
        this.programs = datas;
      })
    } else {
      this.programService.getPrograms().then((datas) => {
        this.programs = datas;
      })
    }
  }
}
