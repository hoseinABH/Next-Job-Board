import createSagaMiddleware from 'redux-saga';
// Create an instance of redux saga middleware to observe all dispatched actions by components or any other palces
export const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default middlewares;
