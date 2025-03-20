import { randomUUID } from "crypto";

export class Question implements ICommentable, IVoteable {
    id: string;
    body: string;
    tags: Tag[];
    answers: Answer[];
    comments: CommentClass[];
    vote: Vote;
    constructor(id: string, body: string, tags: Tag[]) {
        this.id = id;
        this.body = body;
        this.tags = tags;
        this.answers = [];
        this.comments = [];
        this.vote = new Vote();
    }

    addComment(comment: string, user): void {
        this.comments.push(new CommentClass(this.comments.length + 1, comment, user))
    }

    getComments(): string[] {
        return this.comments.map(comment => comment.text);
    }

    upVote(): void {
        this.vote.upVote();
    }

    downVote(): void {
        this.vote.downVote();
    }

    getVotes(): number {
        return this.vote.value;
    }

    acceptAnswer(answer: Answer): void {
        answer.accept();
    }

    addAnswer(answer: string): void {
        this.answers.push(new Answer(randomUUID(), answer));
    }

    getAnswers(): string[] {
        return this.answers.map(answer => answer.content);
    }

}