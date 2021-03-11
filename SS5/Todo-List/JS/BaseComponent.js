export default class BaseComponent extends HTMLElement {
    _data;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    get data() {
        return this._data;

    }

    set data(data) {
        this._data = data;
        this.dataChangedCallback();
    }

    dataChangedCallback() {
        let $todoContainer = new TaskContainer();
        $todoContainer.data = todoData;
        $app.appendChild($todoContainer);    
    }
}