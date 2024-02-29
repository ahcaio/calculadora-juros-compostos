import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  capital: number = 0.0;
  juros: number = 0.0;
  tempo: number = 0.0;
  media: number | null = null

  calcularMedia (): void {
    this.media = this.capital * Math.pow(1 + this.juros / 100, this.tempo);
  }
}
