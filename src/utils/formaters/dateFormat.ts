export default (startDate: string) => {
  const [startMonth, startYear] = startDate.split("/");
  const startDateObj = new Date(Number(startYear), Number(startMonth) - 1);

  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - startDateObj.getTime();

  const yearsDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 365.25)
  );
  const monthsDifference = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.44)
  );
  let result = "";
  if (yearsDifference > 1) {
    result += `${yearsDifference} anos`;
  } else if (yearsDifference === 1) {
    result += `${yearsDifference} ano`;
  }

  if(result[0]){
    result += ` e`;

   
  }

  if (monthsDifference > 1) {
    result += ` ${monthsDifference} meses`;
  } else if (monthsDifference === 1) {
    result += ` ${monthsDifference} mês`;
  }

  return result;
};
