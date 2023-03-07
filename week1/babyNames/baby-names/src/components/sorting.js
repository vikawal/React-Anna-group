
export function sortByName(names) {
  return names.sort((a,b) => a.name.localeCompare(b.name));
}

export function  filterByGender(names, gender) {
  return names.filter((name)=> name.sex ===gender);
}

// export default {sortByName, filterByGender};
