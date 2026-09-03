export interface Iquestion {
  id: string;
  text: string;
  examId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  text: string;
}
