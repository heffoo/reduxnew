 const initialState = {
     name: '123',
     color: 'black'
 }
 
 export default function appReducer(state = initialState, action) {
     switch(action.type) {
         case 'FIRST' : 
         return {
             name: 'another'
         }
         case 'SECOND' :
             return {
                //  ...state, 
                 name:'another one'}
             
         default: return state
        }
}
