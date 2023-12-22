/**
 * Sets up a promise and its handling in a given promise state.
 * @param {Promise} promise - The promise to be resolved.
 * @param {Object} promiseState - The state object to track the promise's status.
 */
export default function resolvePromise(promise, promiseState) {
  promiseState.promise = promise;
  promiseState.data = null;
  promiseState.error = null;

  if (promiseState.promise) {
      promise.then(handlePromiseACB).catch(handleErrorACB);
  }

  /**
   * Handles the successful resolution of the promise.
   * @param {*} result - The result of the resolved promise.
   */
  function handlePromiseACB(result) {
      
      if (promiseState.promise === promise) {
          promiseState.data = result;
          promiseState.error = null;
      }
  }

  /**
   * Handles errors that occur during the promise resolution.
   * @param {Error} error 
   */
  function handleErrorACB(error) {

      if (promiseState.promise === promise) {
          promiseState.error = error;
          promiseState.data = null;
      }
  }
}
