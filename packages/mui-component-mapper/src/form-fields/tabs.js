import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const renderTabHeader = items => items.map(({ title, key, name }) => <Tab key={ name || key } label={ title } />);
const renderTabContet = ({ key, name, fields }, formOptions) => <Fragment key={ name || key }>{ formOptions.renderForm(fields, formOptions) }</Fragment>;

class FormTabs extends Component {
  state = {
    activeTab: 0,
  }

  handleTabChange = (event, tabIndex) => this.setState({ activeTab: tabIndex });

  render(){
    const { fields, formOptions } = this.props;
    const { activeTab } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Tabs value={ activeTab } onChange={ this.handleTabChange }>
            { renderTabHeader(fields) }
          </Tabs>
        </AppBar>
        { renderTabContet(fields[activeTab], formOptions) }
      </div>
    );
  }
}

FormTabs.propTypes = {
  fields: PropTypes.array.isRequired,
  formOptions: PropTypes.object.isRequired,
};

export default FormTabs;
