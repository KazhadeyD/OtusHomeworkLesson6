function task1 (date) {
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  const dt = new Date(date.replace(pattern, '$3-$2-$1'));
  console.log(new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(dt));
}

function task2 (date) {
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  const dt = new Date(date.replace(pattern, '$3-$2-$1'));
  console.log(dt.getHours() * 60 + dt.getMinutes());
}

function task3 (date1, date2) {
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  const dt1 = new Date(date1.replace(pattern, '$3-$2-$1'));
  const dt2 = new Date(date2.replace(pattern, '$3-$2-$1'));
  return dt1 > dt2 ? 1 : 0;
}

const exportedFunction =
    {
      task1,
      task2,
      task3
    };

module.exports = exportedFunction;
