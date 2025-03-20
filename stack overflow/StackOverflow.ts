import { randomUUID } from "crypto";
import { Question } from "./Question";
import { UserActivity } from "./UserActivity";
class StackOverflow {
  // singleton instance
    private static instance: StackOverflow;
    private constructor() { 
        // private constructor
    }
    static getInstance() {
        if (!StackOverflow.instance) {
            StackOverflow.instance = new StackOverflow();
        }
        return StackOverflow.instance;
    }

    // properties
    users: User[] = [];
    tags: Tag[] = [];
    userActivities: UserActivity[] = [];
    comments: CommentClass[] = [];
    questions: Question[] = [];
    answers: Answer[] = [];

    // methods
    addUser(email: string, name: string, password: string) {
        const user = new User(email, name, password);
        this.userActivities.push(new UserActivity(user));
    }

    addTag(name: string) {
        this.tags.push(new Tag(name));
    }

    addQuestion(body: string, tags: Tag[], UserActivity: UserActivity) {
        const question = UserActivity.addQuestion(body, tags);
        this.questions.push(question);
        return question;
    }

    addCommentToQuestion(question: Question, comment: string, user: UserActivity) {
        question.addComment(comment, user);
    }


    getQuestions() {
        return this.questions.map(question => question.body);
    }

    getQuestionByName(name: string) {
        return this.questions.find(question => question.body === name);
    }

    add
}