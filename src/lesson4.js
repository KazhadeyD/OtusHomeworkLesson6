function task1 (age) {
  const user = {
    user: 'John',
    age
  };
  console.log(user);
}

function task2 () {
  const user = {
    user: 'John'
  };

  user.user = 'admin';

  console.log(user);
}

const exportedFunction =
{
  task1,
  task2
};

module.exports = exportedFunction;
