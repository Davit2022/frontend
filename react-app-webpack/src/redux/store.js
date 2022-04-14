import { createStore } from 'redux';

const store = createStore((state) => state, {
  user: {
    name: 'Test',
  },
});
export default store;
