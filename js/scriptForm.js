
const name = document.getElementsByName("name");
const phone = document.getElementsByName("phone");
const email = document.getElementsByName("E-mail");

const formOfPage = document.getElementById("formMain");
const formOfOrder = document.getElementById("formOrder");
const formOfConsultation = document.getElementById("formConsultation");


function generateError(text, i) {
    let error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;

    let inputs = document.getElementsByTagName("input");
    inputs.item(i).style.borderStyle = 'solid';
    inputs.item(i).style.borderWidth = '1px';
    inputs.item(i).style.borderColor = 'red';

    return error;
}

function validate(form){

    for (let i = 0; i < phone.length; i++){
        const phoneMask = new IMask(phone[i], {
            mask: "+{7}(000)000-00-00",
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let errors = form.getElementsByClassName('error');

        while (errors.length > 0){
            errors[0].remove();
        }

        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++){
            inputs.item(i).style.borderColor = 'gray';
            inputs.item(i).style.borderStyle = 'solid';
            inputs.item(i).style.borderWidth = '1px';
        }

        for (let i = 0; i < name.length; i++){
           if(form.contains(name[i])){
               if (!name[i].value) {
                   form.insertBefore(generateError("Введите имя", 3*i + 0), name[i]);
               }
               if (!email[i].value) {
                   form.insertBefore(generateError("Введите свою почту", 3*i + 2), email[i]);
               }
               if (!phone[i].value) {
                   form.insertBefore(generateError("Введите номер телефона", 3*i + 1), phone[i]);
               }
           }

        }
    })
}

validate(formOfPage);
validate(formOfConsultation);
validate(formOfOrder);





