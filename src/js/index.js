export default function extract(obj) {
  const { special } = obj;
  const modProp = [];
  for (const prop of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = prop;
    modProp.push({
      id,
      name,
      icon,
      description,
    });
  }
  return modProp;
}
