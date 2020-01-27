import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as MockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');