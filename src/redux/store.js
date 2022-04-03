import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reducers/counterReducers';
import addCartReducer from './reducers/addCartReducer';
import dataImgReducer from './reducers/dataImgReducer';
import thunk from 'redux-thunk'


//combineReducers qui permet de regrouper tous les reducers
const rootReducer = combineReducers({
    counterReducer,
    addCartReducer,
    dataImgReducer
})

//le middleware est executé entre le dispatch et son envoie
const customMiddleware = store => next => action => {
    //continuer mon dispatch sans rien changer
    // next(action);

    //modifier l'action
    const actionModif = {
        type: "ADDCART",
        payload: 789
    }
    next(actionModif);
}

/*le store doit avoir en paramètre le reducer (qui contient
le state et l'action pour modifier ce state)
Le reducer est appelé à chaque fois qu'on a envie 
de modifier le state */

const store = createStore(rootReducer, applyMiddleware(
    thunk
));
export default store;