import React from "react";
import { observer } from "mobx-react-lite";
import Popup from "reactjs-popup";

const PackInformationView = observer((props) => {
    return (
        <Popup open={props.open}>
          <div className="modal">
                <p>This is the store information...</p>
           </div>
            <div>
              <button className="storeButton" onClick={() => props.onClose()}>
                CLOSE
              </button>
            </div>
        </Popup>
      );
    });

export default PackInformationView;
