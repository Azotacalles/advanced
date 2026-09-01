export function orderByProps(obj, props) {
  const dop_props = [];
  for(const prop in obj) {
    if (!props.includes(prop)) {
      dop_props.push(prop);
    }
  }
  dop_props.sort();
  const result = [];
  for (const prop of props) {
    result.push({key: prop, value: obj[prop]});
  }
  for(const prop of dop_props) {
    result.push({key: prop, value: obj[prop]});
  }
  return result;
}