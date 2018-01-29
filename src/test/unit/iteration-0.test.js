import DistrictRepository from '../../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 0', () => {
  const district = new DistrictRepository(kinderData);

  test('district has data in an object', () => {
    // remember that an array is also just an object.
    expect(typeof district.districtData).toBe('object');
  });

  test('data coming in has no duplicates', () => {
    // uncomment out the tests that best fits your model
    // expect(district.data.length).toBe(181);
    expect(Object.keys(district.districtData).length).toBe(181);
  });
});
