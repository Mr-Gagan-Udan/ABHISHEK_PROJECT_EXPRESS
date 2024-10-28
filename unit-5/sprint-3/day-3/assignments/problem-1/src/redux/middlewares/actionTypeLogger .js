export const actionTypeLogger = (store) => (next) => (action) => {
    console.log("Dispatched Action Type:", action.type);
    return next(action); 
  };
  