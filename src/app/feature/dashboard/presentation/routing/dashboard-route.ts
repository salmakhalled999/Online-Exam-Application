import { Component } from '@angular/core';
import { Routes } from "@angular/router";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { CardComponent } from "../components/card/card.component";
import { PanelComponent } from "../components/panel/panel.component";
import { DiplomasComponent } from "../pages/diplomas/diplomas.component";
import { ExamsComponent } from '../pages/exams/exams.component';
import { QuestionsComponent } from '../pages/questions/questions.component';
import { AnswersComponent } from '../pages/answers/answers.component';





export const DASHBOARD_ROUTE : Routes = [
    {path: 'sidebar' , component: SidebarComponent},
    {path: 'card' , component: CardComponent },
    {path: 'panel' , component: PanelComponent},
    {path: 'diplomas' , component: DiplomasComponent},
    {path: 'exams' , component: ExamsComponent},
    {path: 'questions' , component: QuestionsComponent},
    {path:'answers' , component: AnswersComponent}
]

