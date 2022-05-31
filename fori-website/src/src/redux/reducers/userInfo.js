const Uname = "";
const useradd = false;
const userName = (state = Uname, action) => {
  switch (action.type) {
    case "UserName":
      return (state = action.payload);
    default:
      return state;
  }
};
const userAdd = (state = useradd, action) => {
  switch (action.type) {
    case "UserAdd":
      return (state = action.payload);
    default:
      return state;
  }
};
export { userName, userAdd };
