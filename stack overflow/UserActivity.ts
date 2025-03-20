import { randomUUID } from "crypto";
import { Question } from "./Question";

export class UserActivity {
    user: User;
    questions: Question[] = [];

    constructor(user: User) {
        this.user = user;
    }

    addQuestion(question: string, tags: Tag[]) {
        const questionObj = new Question(randomUUID(), question, tags);
        this.questions.push(questionObj);
        return questionObj;
    }

    getQuestions() {
        return this.questions.map(question => question.body);
    }

    getQuestionById(id: string) {
        return this.questions.find(question => question.id === id);
    }

    addAnswer(questionId: string, answer: string, user: User) {
        const question = this.getQuestionById(questionId);
        if (question) {
            question.addAnswer(answer);
        }
    }
        
}