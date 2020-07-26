export const findByTestAttr = (wrapper, name) => {
  return wrapper.find(`[data-test="${name}"]`);
};