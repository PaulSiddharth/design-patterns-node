interface WebPage {
    display(): void;
}

class BasicWebPage implements WebPage {
    html: string;

    display() {
        console.log('Basic web page');
    }
}

abstract class WebPageDecorator implements WebPage {
    protected page: WebPage;

    constructor(page: WebPage) {
        this.page = page;
    }

    display() {
        this.page.display();
    }
}

class AuthenticatedWebPage extends WebPageDecorator {
    constructor(page: WebPage) {
        super(page);
    }

    authenticateUser() {
        console.log('User authenticated');
    }

    display() {
        super.display();
        this.authenticateUser();
    }
}

class AuthorizedWebPage extends WebPageDecorator {
    constructor(page: WebPage) {
        super(page);
    }

    authorizeUser() {
        console.log('User authorized');
    }

    display() {
        super.display();
        this.authorizeUser();
    }
}

const basicWebPage = new BasicWebPage();
let page: WebPage = new AuthenticatedWebPage(basicWebPage);
page = new AuthorizedWebPage(page);

page.display();
