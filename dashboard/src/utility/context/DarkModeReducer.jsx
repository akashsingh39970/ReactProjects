export const DarkModeReducer = (state, action) =>{
    switch (action.type){
        case 'Light':
            {
                return{
                    darkMode: false,
                };
            }
            case 'Dark':
            {
                return{
                    darkMode: true,
                };
            }
            case 'Toogle':
            {
                return{
                    darkMode: !state.darkMode,
                };
            }
            default:
                return state;
            
    }
}

