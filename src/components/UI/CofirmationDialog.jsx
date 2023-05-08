import React from "react"
import {PopOver} from "../UI"

export default function ConfirmationDialog({ closeDialog, handleUpdate, message }){
    return (
        <div>
          <PopOver>
            <div className="bg-white text-black flex flex-col w-[80%] md:w-[70%] lg:w-[40%] py-6 px-2 rounded-md">
              <p className="my-4 self-center text-center">{message}</p>
              <div className="self-end px-4 flex gap-4">
                <button
                  className="border border-primary px-4 py-1 rounded-2xl active:bg-primary lg:hover:bg-hover lg:hover:text-white "
                  onClick={closeDialog}
                >
                  Cancel
                </button>
                <button
                  className="border border-primary text-white bg-primary px-4 py-1 rounded-2xl active:bg-hover lg:hover:bg-hover lg:hover:text-white "
                  onClick={handleUpdate}
                >
                  Confirm
                </button>
              </div>
            </div>
          </PopOver>
        </div>
      );

}