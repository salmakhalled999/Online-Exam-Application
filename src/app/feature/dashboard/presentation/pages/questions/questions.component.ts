import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { KnobModule } from 'primeng/knob';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../application/dashboard/dashboard.service';
import { Iquestion } from '../../../domain/models/iquestion.interface';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-questions',
  imports: [PanelModule, ProgressBarModule, SidebarComponent, BreadcrumbModule, KnobModule, FormsModule, RadioButtonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly dashboardService = inject(DashboardService)
  private readonly router = inject(Router)
  diplomaId: WritableSignal<string | null> = signal('')
  diplomaTitle = ''
  items: MenuItem[] = [];
  questionsId: WritableSignal<string | null> = signal('')
  questionData: WritableSignal<Iquestion[]> = signal([])
  // Question and Answer Part
  selectedCategory: any = null;
  categories: any[] = []
  currentQuestionIndex = signal(0);


  //digrams
  progress = -75;
  radius = 27.5;
  circumference = 2 * Math.PI * this.radius;
  get progressOffset() {
    return this.circumference * (1 - this.progress / 100);
  }

  ngOnInit(): void {
    this.selectedCategory = this.categories[1];
    this.getQuestionsId()
    this.getDiploma()
  }

  //Get Diplomas
  getDiploma() {
    this.dashboardService.getDiploma(this.diplomaId()).subscribe({
      next: (res) => {
        console.log(res);
        this.diplomaTitle = res.payload.data?.[this.currentQuestionIndex()].title
        // p-breadcrumb
        this.items = [{
          label: "Diplomas",
          routerLink: "/diplomas"
        },
        {
          label: this.diplomaTitle,
          routerLink: '/exams'
        },
        ]
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  //Get All Questions Id
  getQuestionsId() {
    this.activatedRoute.paramMap.subscribe((url) => {
      if (url.get('id')) {
        this.questionsId.set(url.get('id'))
        this.getAllQuestions()
      }
    })

  }

  //Get All Questions
  getAllQuestions() {
    this.dashboardService.getAllQuestions(this.questionsId()).subscribe({
      next: (res) => {
        // console.log(res);
        this.questionData.set(res.payload.questions)

        /// List of Answers part
        this.categories = [
          { name: `${this.questionData()[this.currentQuestionIndex()]?.answers?.[0]?.text}`, key: '1' },
          { name: `${this.questionData()[this.currentQuestionIndex()]?.answers?.[1]?.text}`, key: '2' },
          { name: `${this.questionData()[this.currentQuestionIndex()]?.answers?.[2]?.text}`, key: '3' },
          { name: `${this.questionData()[this.currentQuestionIndex()]?.answers?.[3]?.text}`, key: '4' },
        ];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // Next Button
  next() {
    if (this.currentQuestionIndex() < this.questionData().length - 1) {
      this.currentQuestionIndex.update(index => index + 1);
      this.updateCategories();
    }
  }

  // Previous Button
  Previous() {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update(index => index - 1);
      this.updateCategories();
    }
  }

  updateCategories() {
    const answers =
      this.questionData()[this.currentQuestionIndex()]?.answers ?? [];

    this.categories = answers.map((answer, index) => ({
      name: answer.text,
      key: String(index + 1)
    }));
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex() == this.questionData().length - 1
  }

  // Submit Button
  submit() {
    this.router.navigate(['/answers',this.questionsId()])
  }
}
