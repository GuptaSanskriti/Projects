import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { handleSubmit } from './js/formHandler'
import { checkText } from './js/formHandler'
import { getKey } from './js/formHandler'
import { validateUrl } from './js/nameChecker'
import {changeUI} from './js/formHandler'

alert("I EXIST")

export {  
    handleSubmit, 
    checkText,    
    getKey,
    validateUrl,
    changeUI
}