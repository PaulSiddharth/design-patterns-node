import { randomUUID } from "crypto";

class Comment {

    commentId: string;
    comment: string;
    
    constructor(comment: string) {
        this.commentId = randomUUID();
        this.comment = comment;
    }
}