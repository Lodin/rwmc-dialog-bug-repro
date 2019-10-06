import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";
import {MDCDialog} from "@material/dialog/component";

import { Button } from "@rmwc/button";
import {
  Dialog,
  DialogActions,
  DialogButton,
  DialogContent,
  DialogTitle
} from "@rmwc/dialog";
import React, { useEffect, useRef, useState } from "react";

function Test1() {
  const [isDialogOpen, toggleDialog] = useState(false);

  return (
    <>
      <Button onClick={() => toggleDialog(true)}>Open Dialog</Button>
      <Dialog open={isDialogOpen} onClose={() => toggleDialog(false)}>
        <DialogTitle>Test Dialog</DialogTitle>
        <DialogContent>Some content</DialogContent>
        <DialogActions>
          <DialogButton action="close">Close</DialogButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

function Test2() {
  const ref = useRef();
  const dialog = useRef();

  useEffect(() => {
    dialog.current = new MDCDialog(ref.current);
  }, []);

  return (
    <>
      <Button onClick={() => dialog.current.open()}>Open MDC Dialog</Button>
      <div
        ref={ref}
        className="mdc-dialog"
           role="alertdialog"
           aria-modal="true"
           aria-labelledby="my-dialog-title"
           aria-describedby="my-dialog-content">
        <div className="mdc-dialog__container">
          <div className="mdc-dialog__surface">
            <h2 className="mdc-dialog__title" id="my-dialog-title">Choose a Ringtone</h2>
            <div className="mdc-dialog__content" id="my-dialog-content">
              <ul className="mdc-list mdc-list--avatar-list">
                <li className="mdc-list-item" tabIndex="0"
                    data-mdc-dialog-action="none">
                  <span className="mdc-list-item__text">None</span>
                </li>
                <li className="mdc-list-item" data-mdc-dialog-action="callisto">
                  <span className="mdc-list-item__text">Callisto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mdc-dialog__scrim"/>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Test1/>
      <Test2/>
    </>
  )
}

export default App;
