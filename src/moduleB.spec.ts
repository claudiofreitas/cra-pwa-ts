import { b } from './moduleB';

// jest.mock('./moduleA', () => ({
//   a: () => 'c',
// }));

jest.mock('./moduleA');

describe('b', () => {
  it('should call a', () => {
    const response = b();
    expect(response).toEqual('mocked');
  });
});
