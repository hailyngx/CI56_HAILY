class Meme {
    id;
    name;
    image;
    dateModified;

    constructor(id, name, image, dateModified) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    }

    show() {
        document.getElementById("name").innerHTML = this.name;
        document.getElementById("image").src = this.image;
        document.getElementById("dateModified").innerHTML = this.dateModified;
    }

    update(data) {
        this.id = data.id
        this.name = data.name
        this.image = data.image
        this.dateModified = data.dateModified
    }
}




