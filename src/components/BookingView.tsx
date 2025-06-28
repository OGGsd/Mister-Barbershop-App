import React from 'react';
import CityPage from './CityPage';
import AsecsPage from './AsecsPage';

interface BookingViewProps {
  branch: string;
}

const BookingView: React.FC<BookingViewProps> = ({ branch }) => {
  if (branch === 'CITY') {
    return <CityPage />;
  }
  
  if (branch === 'ASECS') {
    return <AsecsPage />;
  }

  // Fallback to CITY if branch is unknown
  return <CityPage />;
};

export default BookingView;