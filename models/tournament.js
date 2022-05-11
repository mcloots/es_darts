export function Tournament(id, name, start_date, end_date) {
  // Instance variables. Leading underscore is a hint that they are private.
  const _id = id;
  const _name = name;
  const _start_date = start_date;
  let _end_date = end_date;

  const getId = () => {
    return _id;
  };

  const getName = () => {
    return _name;
  };

  const getStartDate = () => {
    return _start_date;
  };

  const getEndDate = () => {
    return _end_date;
  };

  return {
      getId,
      getName,
      getStartDate,
      getEndDate
  }
}
