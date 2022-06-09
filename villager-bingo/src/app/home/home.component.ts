import { Component, OnInit } from '@angular/core';
import { BingoService } from '../service/bingo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../styles.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private bingoService: BingoService
  ) { }

  ngOnInit(): void {
    this.bingoService.ngOnInit()
  }

}
