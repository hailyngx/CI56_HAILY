const $template = document.createElement('template');
$template.innerHTML = `
    <link rel="stylesheet" href="./style.css">
    <div>
      <h1 id="name" class="card-title" style="font-weight: 900">Course name: </h4>
      <p id="status" class="card-text" style="color: red">Status: </p>
    </div>
`;

export default class CourseContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    
        this.$name = this.shadowRoot.getElementById('name');
        this.$status = this.shadowRoot.getElementById('status');
    }

    //dinh nghia thuoc tinh
    static get observedAttributes() {
        return ['name', 'status'];
    }

    //duoc goi khi thuoc tinh duoc dinh nghia thay doi gia tri
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log("thuoc tinh " + attrName + " thay doi gia tri thanh:" + newValue);

        if(attrName == 'name') {
            this.$name.innerHTML = newValue;
        }else if(attrName == 'status') {
            this.$status.innerHTML = newValue;
        }
    }
}

window.customElements.define('course-container', CourseContainer);
