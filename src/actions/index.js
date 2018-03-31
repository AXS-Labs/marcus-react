const NEW_TIME = 'NEW_TIME';

export { NEW_TIME };
export function newTime() {
  return { type: NEW_TIME, time: new Date() };
}

export function fetchTime() {
  return (dispatch) => {
    dispatch(newTime());

    setTimeout(() => { dispatch(newTime()) }, 3000);
    return 3;
  };
}
