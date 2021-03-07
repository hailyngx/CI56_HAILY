// const submitForm = document.querySelector('.add');
// const addButton = document.querySelector('.add-todo');
// const todoList = document.querySelector('.todos');
// const list = document.querySelectorAll('.todos li'); 

// let listLenght = list.lenght;

// const generateTempalate = (todo) => {
  
//   const html = `<li>
//                   <input type="checkbox" id="todo_${listLenght}">
//                   <label for="todo_${listLenght}">
//                     <span class="check"></span>
//                     ${todo}
//                   </label>
//                   <i class="far fa-trash-alt delete"></i>
//                 </li>`
//   todoList.innerHTML += html;
// };

// function addTodos(e) {
//   e.preventDefault();
//   const todo = submitForm.add.value.trim();
//   if (todo.length) {
//     listLenght = listLenght + 1;
//     generateTempalate(todo);
//     submitForm.reset();
//   }
// }

// submitForm.addEventListener('submit', addTodos);
// addButton.addEventListener('click', addTodos);

// function deleteTodos(e) {
//   if (e.target.classList.contains('delete')) {
//     e.target.parentElement.remove();
//   }
// }

// todoList.addEventListener('click', deleteTodos);

const $template = document.createElement('template');
$template.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../Todo-List/style.css">
    <div class="todoList">
    <div class="cover-img">
      <div class="cover-inner">
        <h3 id="name" class="card-title">Task Domain</h3>
      </div>
    </div>
    <div class="content">
      <form class="add">
        <input type="text" name="add" placeholder="No time to add 🤡">
        <div class="input-buttons">
          <a href="#0" class="add-todo">
            <i class="fas fa-plus add"></i>
          </a>
        </div>
      </form>
      <ul class="todos">
        <li>
          <input type="checkbox" id="description">
          <label for="description" id="description" class="card-text">
            <span class="check"></span>
            Describe your task
            <i class="far fa-trash-alt delete"></i>
            <p id="deadline" class="card-text">07/03/2021</p>
          </label>
        </li>
      </ul>
    </div>
  </div>
  `;

export default class TaskContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name = this.shadowRoot.getElementById('name');
        this.$description = this.shadowRoot.getElementById('description');
        this.$deadline = this.shadowRoot.getElementById('deadline');
        this.$status = this.shadowRoot.getElementById('status');
    }

    static get observedAttributes(){
        return['name','description','deadline','status'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log("thuộc tính "+ attrName+ " thay đổi giá trị thành: " + newValue)

        if(attrName == 'name'){
            this.$name.innerHTML = newValue
        }else if(attrName == 'description'){
            this.$description.innerHTML = newValue
        }else if(attrName == 'deadline'){
            this.$deadline.innerHTML = newValue;
        }else if(attrName == 'status'){
            this.$status.className = newValue;
        }
    }
}

window.customElements.define('task-container',TaskContainer);
