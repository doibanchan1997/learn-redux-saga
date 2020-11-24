const validate = (values) => {
    const errors ={}
    // let requiredFields = [
    //     'title',
    //     'description'
    // ]
    // console.log(requiredFields);
    // requiredFields.forEach(field => {
    //     if(!values[field]){
    //         errors[field] = 'require'
    //     }
    //     return errors;
    // })
    const {title, description} = values;
    if(!title){
        errors.title = 'Vui long nhap tieu de';
    }
    else if (title.trim().length < 5){
        errors.title = 'tieu de phai lon hon 5 ki tu';
    }
    else if(!description){
        errors.description = "Vui long nhap mo ta"
    }
    return errors;
}
export default validate