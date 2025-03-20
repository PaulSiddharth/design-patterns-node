
abstract class Dialog {
    abstract createButton(): Button;
}

class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}

class WebDialog extends Dialog {
    createButton(): Button {
        return new HTMLButton();
    }
}

interface Button {
    render(): void;
    onClick(): void;
}

class WindowsButton implements Button {
    render(): void {
        console.log('Rendering Windows button');
    }

    onClick(): void {
        console.log('Clicking Windows button');
    }
}

class HTMLButton implements Button {
    render(): void {
        console.log('Rendering HTML button');
    }

    onClick(): void {
        console.log('Clicking HTML button');
    }
}

function clientCode(dialog: Dialog) {
    const button = dialog.createButton();
    button.render();
    button.onClick();
}

clientCode(new WindowsDialog());