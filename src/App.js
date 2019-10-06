import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";

import { Button } from "@rmwc/button";
import {
  Dialog,
  DialogActions,
  DialogButton,
  DialogContent,
  DialogTitle
} from "@rmwc/dialog";
import React, { useState } from "react";

function App() {
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

export default App;
