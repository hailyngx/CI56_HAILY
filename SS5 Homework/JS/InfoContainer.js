const $template = document.createElement('template');
$template.innerHTML = `
    <link rel="stylesheet" href="./style.css">
    <div class="info">
      <p id="name" class="card-title">Student's name: </p>
      <p id="age" class="card-text" style="margin-left: 30px">Student's age: </h3>
      <p id="address" class="card-text" style="margin-left: 30px">Student's address: </p>
    </div>
`;

export default class InfoContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    
        this.$name = this.shadowRoot.getElementById('name');
        this.$age = this.shadowRoot.getElementById('age');
        this.$address = this.shadowRoot.getElementById('address');
    }

    //dinh nghia thuoc tinh
    static get observedAttributes() {
        return ['name', 'age', 'address'];
    }

    //duoc goi khi thuoc tinh duoc dinh nghia thay doi gia tri
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log("thuoc tinh " + attrName + " thay doi gia tri thanh:" + newValue);

        if(attrName == 'name') {
            this.$name.innerHTML = newValue;
        } else if(attrName == 'age') {
            this.$age.innerHTML = newValue;
        } else if(attrName == 'address') {
            this.$address.innerHTML = newValue;
        }
    }
}

window.customElements.define('info-container', InfoContainer);


