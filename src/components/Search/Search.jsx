import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { makeTree, getResults } from '../../utils/searchTree/searchTree';
import { getUserTags } from '../../services/notes';

function Search() {
  const [input, setInput] = useState('');
  const [tree, setTree] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(0);
  const [choice, setChoice] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    async function getTags() {
      const arrayOfTags = await getUserTags(user.id);
      const searchTree = makeTree(arrayOfTags);
      setTree(searchTree);
    }
    getTags();
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
    setSuggestions(getResults(tree, e.target.value));
    setSelected(0);
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      // this is the Enter key
      setChoice(suggestions[selected]);
    }
    if (e.keyCode === 38) {
      // up arrow key
      if (selected !== 0) setSelected((prev) => prev - 1);
    }
    if (e.keyCode === 40) {
      // down arrow key
      if (selected !== suggestions.length - 1) setSelected((prev) => prev + 1);
    }
  }

  return tree ? (
    <div className="App">
      <input
        onKeyDown={(e) => onKeyDown(e)}
        autoComplete="off"
        type="text"
        id="input"
        name="input"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      {suggestions ? (
        <ul>
          {suggestions.map((word, i) => (
            <li
              key={word}
              style={selected === i ? { backgroundColor: 'lightgray' } : {}}
            >
              {word}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <div>{choice ? <h1>{choice}</h1> : <></>}</div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Search;
