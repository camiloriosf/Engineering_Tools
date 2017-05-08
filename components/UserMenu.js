import React from 'react';
import { FlatButton } from 'material-ui';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionStore from 'material-ui/svg-icons/action/store';
import MapsLayers from 'material-ui/svg-icons/maps/layers';
import ActionDescription from 'material-ui/svg-icons/action/description';

export default () => (
  <Toolbar style={{ marginTop: 80 }}>
    <ToolbarGroup >
      <FlatButton label="Dashboard" primary icon={<ActionDashboard />} />
      <FlatButton label="Companies" primary icon={<ActionStore />} />
      <FlatButton label="Projects" primary icon={<MapsLayers />} />
      <FlatButton label="Memories" primary icon={<ActionDescription />} />
    </ToolbarGroup>
  </Toolbar>
);
