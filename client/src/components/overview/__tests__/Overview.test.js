/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Overview from '../Overview.jsx';


const product = {
  'id': 17071,
  'campus': 'hr-rfp',
  'name': 'Heir Force Ones',
  'slogan': 'A sneaker dynasty',
  'description': 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
  'category': 'Kicks',
  'default_price': '99.00',
  'created_at': '2021-02-23T04:22:44.728Z',
  'updated_at': '2021-02-23T04:22:44.728Z',
  'features': [
    {
      'feature': 'Sole',
      'value': 'Rubber'
    },
    {
      'feature': 'Material',
      'value': 'FullControlSkin'
    },
    {
      'feature': 'Mid-Sole',
      'value': 'ControlSupport Arch Bridge'
    },
    {
      'feature': 'Stitching',
      'value': 'Double Stitch'
    }
  ]
};

const styles = {
  'product_id': '17071',
  'results': [
    {
      'style_id': 90275,
      'name': 'White & White',
      'original_price': '99.00',
      'sale_price': null,
      'default?': true,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        }
      ],
      'skus': {
        '522166': {
          'quantity': 14,
          'size': '7'
        },
        '522167': {
          'quantity': 25,
          'size': '7.5'
        },
        '522168': {
          'quantity': 9,
          'size': '8'
        },
        '522169': {
          'quantity': 2,
          'size': '8.5'
        },
        '522170': {
          'quantity': 18,
          'size': '9'
        },
        '522171': {
          'quantity': 12,
          'size': '9.5'
        },
        '522172': {
          'quantity': 10,
          'size': '10'
        },
        '522173': {
          'quantity': 18,
          'size': '10.5'
        },
        '522174': {
          'quantity': 11,
          'size': '11'
        },
        '522175': {
          'quantity': 35,
          'size': '11.5'
        },
        '522176': {
          'quantity': 25,
          'size': '12'
        }
      }
    },
    {
      'style_id': 90276,
      'name': 'White & Red',
      'original_price': '99.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        }
      ],
      'skus': {
        '522177': {
          'quantity': 14,
          'size': '7'
        },
        '522178': {
          'quantity': 25,
          'size': '7.5'
        },
        '522179': {
          'quantity': 9,
          'size': '8'
        },
        '522180': {
          'quantity': 2,
          'size': '8.5'
        },
        '522181': {
          'quantity': 18,
          'size': '9'
        },
        '522182': {
          'quantity': 12,
          'size': '9.5'
        },
        '522183': {
          'quantity': 10,
          'size': '10'
        },
        '522184': {
          'quantity': 18,
          'size': '10.5'
        },
        '522185': {
          'quantity': 11,
          'size': '11'
        },
        '522186': {
          'quantity': 35,
          'size': '11.5'
        },
        '522187': {
          'quantity': 25,
          'size': '12'
        }
      }
    },
    {
      'style_id': 90277,
      'name': 'White & Black',
      'original_price': '99.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
        }
      ],
      'skus': {
        '522188': {
          'quantity': 14,
          'size': '7'
        },
        '522189': {
          'quantity': 25,
          'size': '7.5'
        },
        '522190': {
          'quantity': 9,
          'size': '8'
        },
        '522191': {
          'quantity': 2,
          'size': '8.5'
        },
        '522192': {
          'quantity': 18,
          'size': '9'
        },
        '522193': {
          'quantity': 12,
          'size': '9.5'
        },
        '522194': {
          'quantity': 10,
          'size': '10'
        },
        '522195': {
          'quantity': 18,
          'size': '10.5'
        },
        '522196': {
          'quantity': 11,
          'size': '11'
        },
        '522197': {
          'quantity': 35,
          'size': '11.5'
        },
        '522198': {
          'quantity': 25,
          'size': '12'
        }
      }
    },
    {
      'style_id': 90278,
      'name': 'White & Blue',
      'original_price': '99.00',
      'sale_price': null,
      'default?': false,
      'photos': [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          'url': 'https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
        }
      ],
      'skus': {
        '522199': {
          'quantity': 14,
          'size': '7'
        },
        '522200': {
          'quantity': 25,
          'size': '7.5'
        },
        '522201': {
          'quantity': 9,
          'size': '8'
        },
        '522202': {
          'quantity': 2,
          'size': '8.5'
        },
        '522203': {
          'quantity': 18,
          'size': '9'
        },
        '522204': {
          'quantity': 12,
          'size': '9.5'
        },
        '522205': {
          'quantity': 10,
          'size': '10'
        },
        '522206': {
          'quantity': 18,
          'size': '10.5'
        },
        '522207': {
          'quantity': 11,
          'size': '11'
        },
        '522208': {
          'quantity': 35,
          'size': '11.5'
        },
        '522209': {
          'quantity': 25,
          'size': '12'
        }
      }
    }
  ]
};

const cart = [
  {
    'sku_id': 522040,
    'count': '1'
  },
  {
    'sku_id': 522194,
    'count': '2'
  },
  {
    'sku_id': 522113,
    'count': '3'
  }
];

const reviewsMeta = {
  'product_id': '17071',
  'ratings': {
    '1': '1',
    '2': '2',
    '3': '12',
    '4': '9',
    '5': '10'
  },
  'count': 999,
  'page': 0,
  'roundedValue': '3.25',
  'value': '3.33',
  'numReviews': 31,
  'maxRating': 14,
  'numRatings': 49,
  'recommended': {
    'false': '9',
    'true': '25'
  },
  'characteristics': {
    'Size': {
      'id': 57235,
      'value': '3.0000000000000000'
    },
    'Width': {
      'id': 57236,
      'value': '3.1363636363636364'
    },
    'Comfort': {
      'id': 57237,
      'value': '3.1363636363636364'
    },
    'Quality': {
      'id': 57238,
      'value': '3.2608695652173913'
    }
  }
};

test('Overview matches snapshot', () => {
  const component = renderer.create(
    <Overview
      product={product}
      styles={styles.results}
      cart={cart}
      reviewsMeta={reviewsMeta}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Overview should update selected style when a style is clicked', () => {
  render(
    <Overview
      product={product}
      styles={styles.results}
      cart={cart}
      reviewsMeta={reviewsMeta}
    />
  );

  // click on a style thumbnail
  fireEvent.click(screen.getByAltText('style_thumbnail_90276'));

  // the name of the style that was clicked should now be in the DOM
  expect(screen.queryByText('White & Red')).toBeDefined();
  // the name of another style should be in the DOM
  expect(screen.queryByText('White & Blue')).toBeNull();

  // click on a different style thumbnail
  fireEvent.click(screen.getByAltText('style_thumbnail_90278'));

  // the name of the previously clicked style should no longer be on the page
  expect(screen.queryByText('White & Red')).toBeNull();
  // the name of the newly clicked style should now be on the page
  expect(screen.queryByText('White & Blue')).toBeDefined();
});