interface GUIFactory {
    createButton(): Button1;
    createCheckbox(): Checkbox;
}

class WindowsFactory implements GUIFactory {
    createButton(): Button1 {
        return new WindowsButton1();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button1 {
        return new MacButton1();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

interface Button1 {
    click(): void;
}

class WindowsButton1 implements Button1 {
    click(): void {
        console.log('Windows button clicked');
    }
}

class MacButton1 implements Button1 {
    click(): void {
        console.log('Mac button clicked');
    }
}

interface Checkbox {
    check(): void;
}

class WindowsCheckbox implements Checkbox {
    check(): void {
        console.log('Windows checkbox checked');
    }
}

class MacCheckbox implements Checkbox {
    check(): void {
        console.log('Mac checkbox checked');
    }
}

function clientCode1(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    button.click();
    checkbox.check();
}

clientCode1(new WindowsFactory());