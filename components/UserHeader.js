import React from 'react';
import Link from 'next/link';
import { FlatButton } from 'material-ui';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { white, grey200 } from 'material-ui/styles/colors';

const style = {
  backgroundColor: white,
  borderBottom: 'solid',
  borderColor: grey200,
  borderBottomWidth: 1,
  height: 80,
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 999,
};

export default () => (
  <Toolbar style={style}>
    <ToolbarGroup firstChild>
      <Link prefetch href="/"><FlatButton label="E-SaaS" hoverColor={white} /></Link>
    </ToolbarGroup>
    <ToolbarGroup>
      Account
    </ToolbarGroup>
  </Toolbar>
);

