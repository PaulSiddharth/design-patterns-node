class Answer {
    id: string;
    content: string;
    isAccepted: boolean;
    constructor(id: string, content: string) {
        this.id = id;
        this.content = content;
        this.isAccepted = false;
    }

    accept() {
        this.isAccepted = true;
    }
}