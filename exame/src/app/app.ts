import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
