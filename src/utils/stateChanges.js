'use es6';

export const selectItems = (state, item) =>
  state.selected.includes(item)
    ? { selected: state.selected.filter(select => select !== item) }
    : { selected: [...state.selected, item] };

export default selectItems;
