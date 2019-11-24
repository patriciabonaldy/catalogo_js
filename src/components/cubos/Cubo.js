import React, { Component } from "react";
import { Divider, Form, Grid } from "semantic-ui-react";

class FormCuboControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Grid columns={2} relaxed="very" stackable>
          <Form.Input fluid label="Alias" placeholder="Alias" width={7} />
          <Form.Input fluid label="Owner" placeholder="Owner" width={7} />
        </Grid>
        <Form.Group>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form.Group inline>
                <label>Parametrizable</label>
                <Form.Radio
                  //inline
                  label="Si"
                  value="y"
                  checked={value === "y"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="No"
                  value="n"
                  checked={value === "n"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Grid.Column>
            <Divider vertical />
            <Grid.Column>
              <Form.Group inline>
                <label>Log</label>
                <Form.Radio
                  //inline
                  label="Si"
                  value="y"
                  checked={value === "y"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="No"
                  value="n"
                  checked={value === "n"}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Grid.Column>
          </Grid>
        </Form.Group>
        <Form.Input label="Descripcion" placeholder="Descripcion" width={14} />
        <Form.Button>Aceptar</Form.Button>
      </Form>
    );
  }
}

export default FormCuboControl;