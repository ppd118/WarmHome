import validator from "validator";
import isEmpty from "lodash/isEmpty"

const validatorInput = (data) => {
    let errors = {}
    if (validator.isEmpty(data.username)) {
        errors.username = "用户名不能为空"
    }

    if (validator.isEmpty(data.password)) {
        errors.password = "密码不能为空"
    }

    return {
        isValidate: isEmpty(errors),
        errors
    }
}

export default validatorInput