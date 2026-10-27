/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TransitProvider, useTransit } from './context/TransitContext';
import { PortalHeader } from './components/Navigation/PortalHeader';
import { LandingPage } from './components/Customer/LandingPage';
import { RiderApp } from './components/Rider/RiderApp';
import { OwnerConsole } from './components/Owner/OwnerConsole';
import { DriverApp } from './components/Driver/DriverApp';

function MainRouter() {
  const { role } = useTransit();

  return (
    <div className="min-h-screen bg-surface flex flex-col font-body-md text-on-surface antialiased">
      {/* Top Universal Role Switcher & Live Eastern Time bar */}
      <PortalHeader />

      {/* Main role view */}
      <div className="flex-1 flex flex-col">
        {role === 'public' && <LandingPage />}
        {role === 'rider' && (
          <div className="flex-1 flex justify-center bg-surface-container-low/40 py-2 sm:py-6">
            <RiderApp />
          </div>
        )}
        {role === 'owner' && <OwnerConsole />}
        {role === 'driver' && (
          <div className="flex-1 flex justify-center bg-surface-container-low/40 py-2 sm:py-6">
            <DriverApp />
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TransitProvider>
      <MainRouter />
    </TransitProvider>
  );
}
