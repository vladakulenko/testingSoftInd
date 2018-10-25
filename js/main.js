const mapPost = new Map([
    ['1', 'asd1'],
    ['2', 'asd2'],
    ['3', 'asd3'],
    ['4', 'asd4'],
    ['5', 'asd5']
]);

let userData = {
    secondName: '',
    name: '',
    fname: '',
    phone: '',
    city: '',
    numPost:'',
    adrPost: ''
}

function finishInputNumberOfPost() {
    const inpElement = document.querySelector('#pst-id-inpt');
    const value = inpElement.value;

    let addr = '';
    if (mapPost.has(value)) {
        addr = mapPost.get(value);
    }

    document.querySelector('#addr-input').value = addr;
}

function validet(){
    let hasError = false;


    if(userData.secondName == '' || /[0-9]+/.test(userData.secondName)){
        document.querySelector('#second-input').className = "form-control is-invalid";
        hasError = true;
    }

    if (userData.name == '' || /[0-9]+/.test(userData.name)) {
        document.querySelector('#name-input').className = "form-control is-invalid";
        hasError = true;
    }

    if (/[0-9]+/.test(userData.fname)) {
        document.querySelector('#fname-input').className = "form-control is-invalid";
        hasError = true;
    }

    if (userData.phone == '') {
        document.querySelector('#tel-input').className = "form-control is-invalid";
        hasError = true;
    }

    if (userData.city == '') {
        document.querySelector('#city-input').className = "form-control is-invalid";
        hasError = true;
    }

    if (userData.numPost == '') {
        document.querySelector('#pst-id-inpt').className = "form-control is-invalid";
        hasError = true;
    }

    setTimeout(function(){
        document.querySelector('#second-input').className = "form-control";
        document.querySelector('#name-input').className = "form-control";
        document.querySelector('#tel-input').className = "form-control";
        document.querySelector('#city-input').className = "form-control";
        document.querySelector('#pst-id-inpt').className = "form-control";
    }, 5000)
    return !hasError
}

function onSubmiteCLick() {


    userData.secondName = document.querySelector('#second-input').value;
    userData.name = document.querySelector('#name-input').value;
    userData.fname = document.querySelector('#fname-input').value;
    userData.phone = document.querySelector('#tel-input').value;
    userData.city = document.querySelector('#city-input').value;    
    userData.numPost = document.querySelector('#pst-id-inpt').value;
    userData.adrPost = document.querySelector('#addr-input').value;

    if (validet()) {
        console.log(userData);
    }

}

