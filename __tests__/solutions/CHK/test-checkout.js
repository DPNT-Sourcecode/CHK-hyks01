describe('checkout', () => {
  it('returns -1 for any illegal input', () => {
    expect(checkout('illegal input')).toEqual(-1);
  })
});