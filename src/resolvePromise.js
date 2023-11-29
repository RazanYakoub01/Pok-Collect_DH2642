export default function resolvePromise(promise, promiseState) {
    //promiseState keeps track of the current active promise
    promiseState.promise = promise;
    //Ensure state is clean before handling new promise
    promiseState.data = null;
    promiseState.error = null;
  
    if (promiseState.promise) {
      promise.then(handlePromiseACB).catch(handleErrorACB);
    }
  
    function handlePromiseACB(result) {
      //Is the promise we are handling the same as the active one in promiseState?
      if (promiseState.promise === promise) {
        promiseState.data = result;
        promiseState.error = null;
      }
    }
  
    function handleErrorACB(error) {
      //Is the promise we are handling the same as the active one in promiseState?
      if (promiseState.promise === promise) {
        promiseState.error = error;
        promiseState.data = null;
      }
    }
  }