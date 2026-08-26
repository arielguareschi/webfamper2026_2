import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer, Sobre],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
