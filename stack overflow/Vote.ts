class Vote {
    value: number;
    constructor() {
        this.value = 0;
    }

    upVote() {
        this.value++;
    }

    downVote() {
        this.value--;
    }
}