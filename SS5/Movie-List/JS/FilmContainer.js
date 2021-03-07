const $template = document.createElement('template');
$template.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div class="card" style="width: 300px;">
    <img id="image" class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png">
    <div class="card-body">
      <h4 id="name" class="card-title">Ten phim</h4>
      <p id="duration" class="card-text">24 phut/tap</p>
      <p id="duration" class="card-text">This film is about...</p>
      <button class="btn btn-primary">See details</a>
    </div>
  </div>
`;

export default class FilmContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    
        this.$image = this.shadowRoot.getElementById('image');
        this.$name = this.shadowRoot.getElementById('name');
        this.$duration = this.shadowRoot.getElementById('duration');
    }

    //dinh nghia thuoc tinh
    static get observedAttributes() {
        return ['name', 'image', 'duration'];
    }

    //duoc goi khi thuoc tinh duoc dinh nghia thay doi gia tri
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log("thuoc tinh " + attrName + " thay doi gia tri thanh:" + newValue);

        if(attrName == 'name') {
            this.$name.innerHTML = newValue;
        } else if(attrName == 'image') {
            this.$image.src = newValue;
        } else if(attrName == 'duration') {
            this.$duration.innerHTML = newValue;
        }
    }
}

window.customElements.define('film-container', FilmContainer);