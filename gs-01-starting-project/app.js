Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');

// const input = document.getElementById('goal');
// const buttonEl = document.querySelector('button');
// const list = document.querySelector('ul');
//
// const addListItem = () => {
//     const enteredVal = input.value;
//     const listItem = document.createElement('LI');
//     listItem.textContent = enteredVal;
//     list.appendChild(listItem);
//     input.value = '';
// }
//
// buttonEl.addEventListener('click', addListItem)
//
//
