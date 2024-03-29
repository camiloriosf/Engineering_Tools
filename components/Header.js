import React from 'react';
import Link from 'next/link';
import { FlatButton } from 'material-ui';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { white, grey200 } from 'material-ui/styles/colors';
import Auth from '../components/Auth';

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

export default ({ pathname }) => (
  <Toolbar style={style}>
    <ToolbarGroup firstChild>
      <Link prefetch href="/"><FlatButton label="E-SaaS" hoverColor={white} /></Link>
      <Link prefetch href="/features"><FlatButton label="Features" secondary hoverColor={white} labelStyle={pathname === '/features' ? { textDecoration: 'underline' } : {}} /></Link>
      <Link prefetch href="/prices"><FlatButton label="Prices" secondary hoverColor={white} labelStyle={pathname === '/prices' ? { textDecoration: 'underline' } : {}} /></Link>
      <Link prefetch href="/dashboard"><FlatButton label="Dashboard" secondary hoverColor={white} labelStyle={pathname === '/dashboard' ? { textDecoration: 'underline' } : {}} /></Link>
    </ToolbarGroup>
    <ToolbarGroup>
      <Auth />
    </ToolbarGroup>
  </Toolbar>
);

