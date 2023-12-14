//server에 POST 요청을 보내는 코드
export const checkSentence = async (text) => {
  let resultSentence;
  await fetch(
    "http://localhost:5173/check",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "오늘나는밥을먹었다" }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
  return resultSentence;
};
