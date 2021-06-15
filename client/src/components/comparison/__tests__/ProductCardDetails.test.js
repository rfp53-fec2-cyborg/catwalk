/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Comparison from '../Comparison.jsx';
// import {productRelated} from '../../../../mock-data/productRelated.js';