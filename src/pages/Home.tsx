import React from 'react';
import { ScreenProps } from '../interfaces';
import HomePage from '../components/home';

const Home: React.FC<ScreenProps<'Home'>> = ({}) => {
  return <HomePage />;
};

export default Home;
