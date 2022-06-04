(()=> {    
    const plusBtn = document.querySelector('.create-task'); 
    const popup = document.querySelector('.popup');
    const form = document.querySelector('.task-form');
    const normalTasks = [];
    const importantTasks = [];
    const allTasks = [...normalTasks, ...importantTasks];

    const addData = function(title, info, date, importance) {
        const obj = {
            title,
            info,
            date,
            importance
        }
        importance === 'important' ? importantTasks.push(obj) : normalTasks.push(obj);
    }

    const renderData = function() {
        
    }

    const checkInputs = function() {
        const error = document.querySelector('.task-form__error');
        const title = document.querySelector('.task-form__input--title');
        const additionalInfo = document.querySelector('.task-form__input--info');
        const date = document.querySelector('.task-form__input--date');
        const importance = [...document.querySelectorAll('.task-form__radio')].find(radio => radio.checked).id;
        if (date.value === '' || title.value === '' || additionalInfo.value === '') {
            error.classList.remove('hidden');
            return
        }
        error.classList.add('hidden');
        popup.classList.add('hidden');
        addData(title, additionalInfo, date, importance);
        renderData();
        title.value = '';
        additionalInfo.value = '';
        date.value = ''; 
    }

    plusBtn.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });
    
    popup.addEventListener('click', function(e) {
        const {value} = e.target.classList;
        if (value === 'popup') {
            popup.classList.add('hidden');
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    });
})();