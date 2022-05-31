export const userName = (data) => {
  console.log(data);
  return { type: "UserName", payload: data };
};
export const userAdd = (data) => {
  return { type: "UserAdd", payload: data };
};
 