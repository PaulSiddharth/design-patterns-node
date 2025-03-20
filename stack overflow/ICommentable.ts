interface ICommentable {
    addComment(comment: string, user: User): void;
    getComments(): string[];
}