import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Button, { ButtonComponent } from "./Button";

export const actions = {
  onClick: action("onClick")
};

const addinTheme = createMuiTheme({
  venaTheme: "addin"
});

const webTheme = createMuiTheme({
  venaTheme: "web"
});

storiesOf("Button", module)
  .add(
    "Default",
    withInfo({
      source: false,
      propTables: [ButtonComponent],
      propTablesExclude: [Button]
    })(() => (
      <div>
        <MuiThemeProvider theme={webTheme}>
          <div>
            <h2>Standard Button (Web)</h2>
            <Button
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Primary
            </Button>

            <Button
              color="secondary"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Secondary
            </Button>

            <Button
              color="confirmation"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Confirmation
            </Button>

            <Button
              color="danger"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Danger
            </Button>
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider theme={addinTheme}>
          <div>
            <h2>Standard Button (Addin)</h2>
            <Button
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Primary
            </Button>

            <Button
              color="secondary"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Secondary
            </Button>

            <Button
              color="confirmation"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Confirmation
            </Button>

            <Button
              color="danger"
              style={{ marginRight: "10px" }}
              onClick={actions.onClick}
            >
              Danger
            </Button>
          </div>
        </MuiThemeProvider>
      </div>
    ))
  )
  .add("Disabled State", () => (
    <div>
      <MuiThemeProvider theme={webTheme}>
        <div>
          <h2>Disabled State (Web)</h2>
          <Button
            color="primary"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Primary
          </Button>

          <Button
            color="secondary"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Secondary
          </Button>

          <Button
            color="confirmation"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Confirmation
          </Button>

          <Button
            color="danger"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Danger
          </Button>
        </div>
      </MuiThemeProvider>
      <MuiThemeProvider theme={addinTheme}>
        <div>
          <h2>Disabled State (Addin)</h2>
          <Button
            color="primary"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Primary
          </Button>

          <Button
            color="secondary"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Secondary
          </Button>

          <Button
            color="confirmation"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Confirmation
          </Button>

          <Button
            color="danger"
            disabled={true}
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Danger
          </Button>
        </div>
      </MuiThemeProvider>
    </div>
  ))
  .add("Loading State", () => (
    <div>
      <MuiThemeProvider theme={webTheme}>
        <div>
          <h2>Loading State (Web)</h2>
          <Button
            color="primary"
            isLoading={true}
            iconClass="fa fa-plus"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Create
          </Button>

          <Button
            color="secondary"
            isLoading={true}
            iconClass="fa fa-cloud-upload"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Secondary
          </Button>

          <Button
            color="confirmation"
            isLoading={true}
            iconClass="fa fa-plus"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Attach
          </Button>

          <Button
            color="danger"
            isLoading={true}
            iconClass="fa fa-trash"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Delete
          </Button>
        </div>
      </MuiThemeProvider>
      <MuiThemeProvider theme={addinTheme}>
        <div>
          <h2>Loading State (Addin)</h2>
          <Button
            color="primary"
            isLoading={true}
            iconClass="fa fa-plus"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Create
          </Button>

          <Button
            color="secondary"
            isLoading={true}
            iconClass="fa fa-cloud-upload"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Secondary
          </Button>

          <Button
            color="confirmation"
            isLoading={true}
            iconClass="fa fa-plus"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Attach
          </Button>

          <Button
            color="danger"
            isLoading={true}
            iconClass="fa fa-trash"
            style={{ marginRight: "10px" }}
            onClick={actions.onClick}
          >
            Delete
          </Button>
        </div>
      </MuiThemeProvider>
    </div>
  ));
