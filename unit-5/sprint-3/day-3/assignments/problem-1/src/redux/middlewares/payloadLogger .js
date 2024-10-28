export const payloadLogger = (store) => (next) => (action) => {
    if (action.payload) {
      console.log("Dispatched Action Payload:", action.payload);
    } else {
      console.log("Dispatched Action with no payload.");
    }
    return next(action);
  };
  