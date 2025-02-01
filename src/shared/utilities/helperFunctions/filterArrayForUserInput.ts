const filterArrayForUserInput = (
  repoCardArray: JSX.Element[],
  userInput: string
) => {
  const filterdRepoCardArray = [...repoCardArray];
  return userInput
    ? filterdRepoCardArray.filter((repoData) => {
        return repoData.props.name === userInput;
      })
    : filterdRepoCardArray;
};

export { filterArrayForUserInput };
