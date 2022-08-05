type Item = {
  id: string;
};

// ! Here we don't allow to pass array of objects without ID field to a function
export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: TItem) => item.id === id);
};
