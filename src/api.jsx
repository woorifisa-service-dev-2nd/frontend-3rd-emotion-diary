//server에 POST 요청을 보내는 코드
export const checkSentence = async (text) => {
  let result = await fetch(
    "http://localhost:3000/check",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: text }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data[0] === undefined ? text : data[0];
    })
    .catch((error) => console.log("실패입니다."));
  return result;
};
