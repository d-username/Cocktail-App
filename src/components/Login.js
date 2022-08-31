export default function Login({
  date,
  setDate,
  setUserIsOver18,
  setLoginError,
  loginError,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(e.target[0].value);
    console.log(typeof date, date);
    ageValidation();
  };

  function todayMinus18Years() {
    var date = new Date();
    date.setDate(date.getDate() + 0);
    date.setMonth(date.getMonth() + 0);
    date.setFullYear(date.getFullYear() - 18);
    console.log('date 18 years ago', date);
    return date;
  }

  const ageValidation = () => {
    const inputDate = new Date(date);
    const todaysDate = new Date(todayMinus18Years());
    console.log('INPUT DATE: ', inputDate, 'TODAY: ', todaysDate);
    if (inputDate > todayMinus18Years()) {
      setUserIsOver18(false);
      setLoginError(true);
    }
    if (inputDate < todayMinus18Years()) {
      setUserIsOver18(true);
    }
  };

  return (
    <div className='login'>
      <h1>When is your Birthday?</h1>
      <h3>You must be at least 18 years old to enter.</h3>

      {loginError ? (
        <img
          className='login--gif-wide'
          alt='must be 18 to enter'
          src='https://c.tenor.com/8qaa_zcuKycAAAAC/you-must-be18to-enter-karen-mason.gif'
        />
      ) : (
        <img
          className='login--gif'
          alt='dog is asking how old are you'
          src='https://c.tenor.com/QfpDsz8ShTsAAAAC/pug-shocked.gif'
        />
      )}

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='date' name='bday'></input> <button>Submit</button>
      </form>
    </div>
  );
}
