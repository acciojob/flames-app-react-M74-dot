import React, { useState } from 'react';

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const relationships = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

  const removeCommonLetters = (str1, str2) => {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    arr1.forEach((char, index) => {
      if (arr2.includes(char)) {
        arr2.splice(arr2.indexOf(char), 1); // Remove char from arr2
        arr1[index] = null; // Mark char as removed in arr1
      }
    });

    const filteredArr1 = arr1.filter(char => char !== null);
    return filteredArr1.length + arr2.length;
  }

  const calculateRelationship = () => {
    if (name1 === "" || name2 === "") {
      setResult("Please Enter valid input");
      return;
    }

    const lengthAfterRemoval = removeCommonLetters(name1, name2);
    const index = lengthAfterRemoval % 6;
    setResult(relationships[index]);
  }

  const clearForm = () => {
    setName1("");
    setName2("");
    setResult("");
  }

  return (
    <div id="main">
      <input type="text" name="name1" data-testid="input1" value={name1} onChange={(e) => setName1(e.target.value)} />
      <input type="text" name="name2" data-testid="input2" value={name2} onChange={(e) => setName2(e.target.value)} />
      <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship Future</button>
      <button data-testid="clear" onClick={clearForm}>Clear</button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
