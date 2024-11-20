document.addEventListener('DOMContentLoaded', function () {
  // function renderForButsBlocksSets(state) {
  //   if (state.style.height === 'auto') {
  //     state.style.height = '0px';
  //   } else if (state.style.height === '0px') {
  //     state.style.height = 'auto';
  //   }
  // };

  // const butSet = document.getElementById('but_set');
  // butSet.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const state = {
  //     blockSet: document.getElementById('block_set'),
  //   };
  //   renderForButsBlocksSets(state.blockSet);
  // })

  // const butAdditionalSet = document.getElementById('but_additional_set');
  // butAdditionalSet.addEventListener('click', (e) => {
  //   e.preventDefault()
  //   const state = {
  //     blockAdditionalSet: document.getElementById('block_additional_settings'),
  //   };
  //   renderForButsBlocksSets(state.blockAdditionalSet);
  // })

  const copyButton = new ClipboardJS('#rezult_copy');

  const spaceColumn2 = document.getElementById('checkbox1_list2_space');
  const spaceColumn3 = document.getElementById('checkbox1_list3_space');
  const spaceColumn4 = document.getElementById('checkbox1_list4_space');
  const spaceColumn5 = document.getElementById('checkbox1_list5_space');
  const checkRadio1 = document.getElementById('check_radio1');
  const checkRadio2 = document.getElementById('check_radio2');
  const checkRadio3 = document.getElementById('check_radio3');
  const checkbox1List1On = document.getElementById('checkbox1_list1_on');
  const checkbox1List2On = document.getElementById('checkbox1_list2_on');
  const checkbox1List3On = document.getElementById('checkbox1_list3_on');
  const checkbox1List4On = document.getElementById('checkbox1_list4_on');
  const checkbox1List5On = document.getElementById('checkbox1_list5_on');
  const wordValue1 = document.getElementById('word_value1');
  const wordValue2 = document.getElementById('word_value2');
  const wordValue3 = document.getElementById('word_value3');
  const wordValue4 = document.getElementById('word_value4');
  const wordValue5 = document.getElementById('word_value5');
  const resultContainer = document.getElementById('rezult_out');
  const butRezult = document.getElementById('but_new_rezult');
  const resultText = document.getElementById('rezult_count');
  const checkbox1Set1 = document.getElementById('checkbox1_set1');
  const checkbox2Set1 = document.getElementById('checkbox2_set1');

  const settingsElements = {
    quotes: document.getElementById('checkbox1_additionally_set'),
    exclamation: document.getElementById('checkbox2_additionally_set'),
    squareBrackets: document.getElementById('checkbox3_additionally_set'),
    stopWord: document.getElementById('checkbox4_additionally_set'),
    replace: document.getElementById('checkbox5_additionally_set'),
    remove: document.getElementById('checkbox6_additionally_set'),
    intoStrin: document.getElementById('checkbox7_additionally_set'),
    shuffle: document.getElementById('checkbox8_additionally_set'),
  }


  function getTextSettings() {
    return {
      isQuotes: settingsElements.quotes.checked,
      isExclamation: settingsElements.exclamation.checked,
      isSquareBrackets: settingsElements.squareBrackets.checked,
      // isStopWord: settingsElements.stopWord.checked,
      isReplace: settingsElements.replace.checked,
      isRemove: settingsElements.remove.checked,
      isIntoStrin: settingsElements.intoStrin.checked,
      // isShuffle: settingsElements.shuffle.checked,
    }
  }

  function displayCheckedFields(setElementChecked, fieldCheckElement, style) {
    fieldCheckElement.style.display = setElementChecked ? style : 'none';
  };

  const objFieldCheckElements = {
    check1: document.getElementById('checkbox1_list1_on'),
    check2: document.getElementById('checkbox1_list2_on'),
    check3: document.getElementById('checkbox1_list3_on'),
    check4: document.getElementById('checkbox1_list4_on'),
    check5: document.getElementById('checkbox1_list5_on'),
  };

  checkbox1Set1.addEventListener('click', (e) => {
    const stileDisplay = 'inline-block';
    Object.values(objFieldCheckElements).forEach((element) => {
      displayCheckedFields(checkbox1Set1.checked, element, stileDisplay);
    })
  });

  // const objSpacesCheck = {
  //   check2: document.getElementById('checkbox1_list2_space'),
  //   check3: document.getElementById('checkbox1_list3_space'),
  //   check4: document.getElementById('checkbox1_list4_space'),
  //   check5: document.getElementById('checkbox1_list5_space'),
  // };

  const spacesForLine2 = document.getElementsByClassName('lable_and_input');
  // console.log('spacesForLine2:', spacesForLine2);


  checkbox2Set1.addEventListener('click', (e) => {
    const stileDisplay = 'flex';
    Object.values(spacesForLine2).forEach((element) => {
      // console.log(element);
      displayCheckedFields(checkbox2Set1.checked, element, stileDisplay);
    })
  });

  function getColumns() {
    const state = {};
    if (checkbox1List1On.checked) {
      state.word1 = {
        element: wordValue1,
        space: true,
      };
    }
    if (checkbox1List2On.checked) {
      if (spaceColumn2.checked) {
        state.word2 = {
          element: wordValue2,
          space: true,
        };
      } else {
        state.word2 = {
          element: wordValue2,
          space: false,
        };
      }
    }
    if (checkbox1List3On.checked) {
      if (spaceColumn3.checked) {
        state.word3 = {
          element: wordValue3,
          space: true,
        };
      } else {
        state.word3 = {
          element: wordValue3,
          space: false,
        };
      }
    }
    if (checkbox1List4On.checked) {
      if (spaceColumn4.checked) {
        state.word4 = {
          element: wordValue4,
          space: true,
        };
      } else {
        state.word4 = {
          element: wordValue4,
          space: false,
        };
      }
    }
    if (checkbox1List5On.checked) {
      if (spaceColumn5.checked) {
        state.word5 = {
          element: wordValue5,
          space: true,
        };
      } else {
        state.word5 = {
          element: wordValue5,
          space: false,
        };
      }
    }
    // console.log(state);

    return state;
  }

  function converterInArr(state) {
    let arr = [];
    const keys = Object.keys(state);
    keys.map((key) => {
      if (state[key].space === false) {
        arr.push(state[key].element.value.trim().split('\n'));
      }
    })
    return arr;
  };

  function updateLists() {
    const lists = [];
    if (checkbox1List1On.checked) {
      lists.push(wordValue1.value.trim().split('\n'));
    }
    if (checkbox1List2On.checked) {

      lists.push(wordValue2.value.trim().split('\n'));
    }
    if (checkbox1List3On.checked) {
      lists.push(wordValue3.value.trim().split('\n'));
    }
    if (checkbox1List4On.checked) {
      lists.push(wordValue4.value.trim().split('\n'));
    }
    if (checkbox1List5On.checked) {
      lists.push(wordValue5.value.trim().split('\n'));
    }
    generatePhrases(lists);
    return lists;
  }

  function handleDuplicates() {
    const option = getSelectedDuplicateOption();
    switch (option) {
      case 'intersect':
        break;
      case 'ignore':
        break;
      case 'skip':
        break;
    }
    updateLists(); // Перегенерируем фразы после изменения настроек
  }


  function getSelectedDuplicateOption() {
    if (checkRadio1.checked) {
      return 'intersect'; // Пересекать дубли
    } else if (checkRadio2.checked) {
      return 'ignore'; // Не пересекать дубли
    } else if (checkRadio3.checked) {
      return 'skip'; // Пропускать при наличии дубликатов
    }
  }

  function concatWords(words) {
    const state = getColumns();
    const keys = Object.keys(state);

    let finalWord = '';

    words.forEach((word, index) => {
      const key = keys[index];
      const isSpaceNeeded = state[key].space;

      finalWord += `${isSpaceNeeded ? ' ' : ''}${word}`;
    })

    return finalWord;
  }

  function generatePhrases(lists) {
    console.log('generatePhrases(lists):', lists);
    const phrases = [];
    const selectedOption = getSelectedDuplicateOption();

    // Логика генерации фраз в зависимости от выбранной опции
    if (selectedOption === 'intersect') {

      // Опция пересечения
      const intersected = intersectLists(lists)

      intersected.map((words) => {
        return phrases.push(concatWords(words));
      });
    } else if (selectedOption === 'ignore') {
      const ignoreDuplicatesRes = ignoreDuplicates(lists);
      console.log('ignoreDuplicatesRes:', ignoreDuplicatesRes);
      console.log('ignoreDuplicatesRes.length:', ignoreDuplicatesRes.length);
      
      if (ignoreDuplicatesRes.length === 0) {
        resultText.textContent = '(фраз: 0)';
        return;
      } else {
      // Опция игнорирования дубликатов
      ignoreDuplicatesRes.forEach((words) => {
        phrases.push(concatWords(words));
      });
      }
    } else if (selectedOption === 'skip') {
      // Опция пропуска при наличии дубликатов
      skipIfDuplicates(lists).forEach((words) => {
        resultText.textContent = '(фраз: 0)';
        phrases.push(concatWords(words));
      });
    }
    // const arr = converterInArr(getColumns());

    let result = phrases.map((phrase) => phrase.trimStart(phrase));

    const textSettings = getTextSettings();

    if (textSettings.isExclamation) {
      result = result.map((phrase) => phrase.split(' ').map((word) => `!${word}`).join(' '))
    }

    // if (textSettings.isStopWord) {
    //   result = result
    // }
    if (textSettings.isReplace) {
      result = result.map((phrase) => phrase.replaceAll('-', ' '));
    }
    if (textSettings.isRemove) {
      result = result.map((phrase) => phrase.replace(/(\"|\+|\!|\.|\,|\[|\])/gm, ''));
    }
    if (textSettings.isShuffle) {
      result = result
    }
    if (textSettings.isQuotes) {
      result = result.map((phrase) => `"${phrase}"`);
    }
    if (textSettings.isSquareBrackets) {
      result = result.map((phrase) => `[${phrase}]`);
    }
    resultText.textContent = '(фраз: ' + `${result.length}` + ')';
    return resultContainer.textContent = result.join(textSettings.isIntoStrin ? ", " : "\n");
  }

  function intersectLists(lists) {
  console.log('intersectLists', lists);

    return lists.reduce((acc, words) => {


      return acc.flatMap((prev) => words.map((word) => prev.concat([word])))
    }, [[]])
    // .map((words) => words.join(" "))
    // .join("\n");
  }

  function ignoreDuplicates(lists) {
    console.log('ignoreDuplicates', lists);
    
    return lists.flatMap((list) => {
      Array.from(list)
  });
  }

  function skipIfDuplicates(lists) {
    const uniqueWords = new Set();
    return lists.flatMap((list) => {
      return list.filter((word) => {
        if (uniqueWords.has(word)) {
          return false;
        }
        uniqueWords.add(word);
        return true;
      });
    });
  }

  butRezult.addEventListener('click', (e) => {
    e.preventDefault();
    resultText.textContent = '';
    resultContainer.textContent = '';
    handleDuplicates();
  })

  const removeDiv = document.getElementById('but_cleans');
  removeDiv.addEventListener('click', (e) => {
    wordValue1.value = '';
    wordValue2.value = '';
    wordValue3.value = '';
    wordValue4.value = '';
    wordValue5.value = '';
  });

  const cleans = {
    cleanButton1: document.getElementById('but_clean1'),
    cleanButton2: document.getElementById('but_clean2'),
    cleanButton3: document.getElementById('but_clean3'),
    cleanButton4: document.getElementById('but_clean4'),
    cleanButton5: document.getElementById('but_clean5'),
  };

  const cons = Object.values(cleans);
  cons.forEach((con) => {
    con.addEventListener('click', (e) => {
      switch (con.id) {
        case 'but_clean1':
          wordValue1.value = '';
          break;
        case 'but_clean2':
          wordValue2.value = '';
          break;
        case 'but_clean3':
          wordValue3.value = '';
          break;
        case 'but_clean4':
          wordValue4.value = '';
          break;
        case 'but_clean5':
          wordValue5.value = '';
        default:
          return;
      }
    })
  })

});