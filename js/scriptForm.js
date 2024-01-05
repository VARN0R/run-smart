
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


async function formSend(e){
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    alert("OK");
    let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
    });

    if(response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
    } else {
        alert("Ошибка");
    }


}

function validate(form){

    for (let i = 0; i < phone.length; i++){
        const phoneMask = new IMask(phone[i], {
            mask: "+{7}(000)000-00-00",
        });
    }

    let isValidate = true;
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
               isValidate = false;
           }
           if (!email[i].value) {
               form.insertBefore(generateError("Введите свою почту", 3*i + 2), email[i]);
               isValidate = false;
           }
           if (!phone[i].value) {
               form.insertBefore(generateError("Введите номер телефона", 3*i + 1), phone[i]);
               isValidate = false;
           }
       }

    }
    return isValidate;
}




formOfConsultation.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate(formOfConsultation)){
        formSend(e);
    }
});
formOfOrder.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate(formOfOrder)){
        formSend(e);
    }
});
formOfPage.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate(formOfPage)){
        formSend(e);
    }
});







