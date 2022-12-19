/**
 * create unit test for all discrepancies react component
 */
import React from 'react';
import {render, screen} from '@testing-library/react';
import AllDiscrepancies from './all-discrepancies';
import {BrowserRouter} from "react-router-dom";

describe('Alldiscrepancies', () => {
  it('should render All discrepancies', () => {
      const linkElement = render(
        <AllDiscrepancies/>
      );
      expect(linkElement).toBeTruthy();
    }
  )
});

