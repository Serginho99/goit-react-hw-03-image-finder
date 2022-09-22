import { InfinitySpin } from 'react-loader-spinner';

import React from 'react';

export default function Loader() {
  return (
    <div className="LoaderBox">
      <InfinitySpin color="#3f51b5" />
    </div>
  );
}
