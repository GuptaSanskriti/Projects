import './styles/index.scss'
import './styles/header.scss'
import './styles/footer.scss'
import './styles/blogs.scss'

import {getDatafromGeonames} from './js/app'
import {performAction} from './js/app'
import {postData} from './js/app'
import {updateUI} from './js/app'
import {changeUI} from './js/app'

export{
    performAction, 
    postData,
    updateUI,
    changeUI,
    getDatafromGeonames
}