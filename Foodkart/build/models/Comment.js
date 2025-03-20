"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Comment {
    constructor(comment) {
        this.commentId = (0, crypto_1.randomUUID)();
        this.comment = comment;
    }
}
