//Code inspiraion -> Lecture slides p.129-130

// this file handles different cases based on the state of the promise, data, and errors
/*It checks the truthiness/falsiness of the promiseState.promise to determine whether a promise exists.
  Because it handles the different cases appropiatly it contributes to effective promise state management
  and ensures good user experince (for example shows a loading image).
*/

function promiseNoData(promiseState){

    // If Promise: Falsy, Data: Don't care and Error: Don't care
    // no data gets renderd to user.
    if(!promiseState.promise) {
        return(
            <div>no data</div>
        );
    }

    //If Promise: Truthy, Data: Falsy and Error: Falsy
    // retuners a loading image since there is a promise but no data/error, however we are maybe waiting for data to be fetched using API
    if(promiseState.promise && !promiseState.data && !promiseState.error){
        return(
            <img src="https://brfenergi.se/iprog/loading.gif"></img>
        );
    }

    //If Promise: Truthy, Data: Falsy and Error: Truthy
    // in this scenario there is an error, so we render error to user
    if(promiseState.promise && !promiseState.data && promiseState.error){
        return(
            <div>{String(promiseState.error)}</div>
        )
    }

    //If Promise: Truthy, Data: Truthy and Error: Falsy
    // nothing special needs to get renderd in this case
    if(promiseState.promise && promiseState.data && !promiseState.error){
        return false; 
    }
}

export default promiseNoData;