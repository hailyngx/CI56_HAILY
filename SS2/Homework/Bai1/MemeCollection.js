class MemeCollection {
    id;
    name;
    owner;
    memes = [];

    constructor(id, name, owner, memes) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    }

    add(meme) {
        this.memes.push(meme);
    }

    update(id, data) {
        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id == id) {
                this.memes[i].update(data);
            }
        }
    }

    delete(id) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes.splice(i, 1);
            }
        }
    }

    show() {
        document.getElementById("name").innerText = this.name;
        document.getElementById("image").src = this.image;
        document.getElementById("dateModified").innerText = this.dateModified;
    }
}

let meme1 = new Meme(1, "Bernie Sanders", "https://content.fortune.com/wp-content/uploads/2021/01/Bernie-Sanders-Meme-Inauguration-Merchandise-Ilo.jpg", new date());
let meme2 = new Meme(2, "Weibo Panda", "https://i.pinimg.com/474x/40/9f/ab/409fabf5f904c3c2e13a3c70541b63d6.jpg", new date());
let meme3 = new Meme(3, "Cheems", "https://s.memehay.com/files/posts/20200915/cheems-cho-vang-dua-hai-ban-tay-ra-dau-vjp-rat-vip-49528c40332aafc321ee556b0412ec67.jpg", new date());
let meme4 = new Meme(4, "Pepe the Frog", "https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale", new date());
let meme5 = new Meme(5, "Stonks", "https://i.kym-cdn.com/entries/icons/mobile/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg", new date());

let myCollection = new MemeCollection(1, "MemeCollection", "Ly", [meme1, meme2, meme3, meme4, meme5]);

myCollection.add(meme2);
myCollection.update(1, {name: "Na Ni", image: "https://i.kym-cdn.com/entries/icons/original/000/028/096/nani.jpg" });
myCollection.delete(3);
console.log(myCollection);
meme1.show();