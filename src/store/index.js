import { createStore} from 'vuex'

export default createStore({
    state: {
        isDragging: false,
        isUploading: false
    },
    mutations: {},
    actions: {},
    getters: {
        isDragging(state){
            return state.isDragging
        }
    }
})