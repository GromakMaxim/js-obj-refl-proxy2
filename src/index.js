export default function getFields(obj) {
  if (arguments.length === 0) return [];
  if (Object.entries(obj).length === 0) return [];
  const result = [];
  obj.special.forEach((elem) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
