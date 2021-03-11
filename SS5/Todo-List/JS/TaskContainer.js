import BaseComponent from "./BaseComponent";

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
            <div id="sub-tasks" style="padding: 20px"></div>
          </label>
        </li>
      </ul>
    </div>
  </div>
  `;

export default class TaskContainer extends BaseComponent {
    constructor() {
      super();
      this.shadowRoot.appendChild($template.content.cloneNode(true));

      this.$name = this.shadowRoot.getElementById('name');
      this.$description = this.shadowRoot.getElementById('description');
      this.$deadline = this.shadowRoot.getElementById('deadline');
      this.$isCompleted = this.shadowRoot.getElementById('isCompleted');
      this.$subTasks = this.shadowRoot.getElementById('sub-tasks');
    }

    dataChangedCallback() {
      this.$name.innerHTML = this.data.name;
      this.$description.innerHTML = this.data.$description;
      this.$deadline.innerText = this.data.$deadline;
      this.$isCompleted.checked = this.data.$isCompleted;
      
      if(this.data.subTasks != undefined) {
        for(let task of this.data.$subTasks) {
          let $todoContainer = new TodoContainer();
          $todoContainer.data = task;
          this.$subTasks.appendChild($todoContainer);
        }
    }
  } 
}

window.customElements.define('todo-container', TodoContainer);

// export default class TaskContainer extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({mode:'open'});
//         this.shadowRoot.appendChild($template.content.cloneNode(true));

//         this.$name = this.shadowRoot.getElementById('name');
//         this.$description = this.shadowRoot.getElementById('description');
//         this.$deadline = this.shadowRoot.getElementById('deadline');
//         this.$isCompleted = this.shadowRoot.getElementById('isCompleted');
//         this.$subTasks = this.shadowRoot.getElementById('sub-tasks')
//     }

//     static get observedAttributes(){
//         return['name','description','deadline','isCompleted', 'sub-tasks'];
//     }

//     attributeChangedCallback(attrName, oldValue, newValue) {
//         console.log("thuộc tính "+ attrName+ " thay đổi giá trị thành: " + newValue)

//         if(attrName == 'name'){
//             this.$name.innerHTML = newValue
//         }else if(attrName == 'description'){
//             this.$description.innerHTML = newValue
//         }else if(attrName == 'deadline'){
//             this.$deadline.innerHTML = newValue;
//         }else if(attrName == 'isCompleted'){
//             // newValue = true/false: booLean
//             // newValue = "true"/"false" --> string
//             this.$isCompleted.checked = (newValue == "true") ? true : false;
//             // toan tu 3 ngoi, viet tat cho
//             // if (newValue == "true") {
//             //     this.$isCompleted.checked = true;
//             // } else {
//             //     this.$isCompleted.checked = false;
//             // }
//         }else if(attrName == 'sub-tasks') {
//             let subTasks = JSON.parse(newValue); //newValue: JSON --> parse duoc
//             for(let todoData of subTasks) {
//                 let $todoContainer = document.createElement('todo-container');
//                 $todoContainer.setAttribute('name', todoData.name);
//                 $todoContainer.setAttribute('description', todoData.$description);
//                 $todoContainer.setAttribute('deadline', todoData.deadline);
//                 $todoContainer.setAttribute('isCompleted', todoData.$isCompleted);

//                 this.$subTasks.appendChild($todoContainer)
//             }
//         }
//     }
// }

// window.customElements.define('task-container',TaskContainer);

