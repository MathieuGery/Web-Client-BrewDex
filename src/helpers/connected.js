import { atom } from 'recoil'
import { getUser } from '../tools/Auth'

const connectedState = atom({
    key: 'connectedState',
    default: !!getUser(),
})

export default connectedState
