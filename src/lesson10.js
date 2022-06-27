function task1 (str) {
  // скопипастил из интернета
  const regexExp = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
  return regexExp.test(str);
}

function task2 (str) {
  const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return regex.test(str);
}

function task3 (str) {
  const regex = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
  return regex.test(str);
}

const exportedFunction =
        {
          task1,
          task2,
          task3
        };

module.exports = exportedFunction;
