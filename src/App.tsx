import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  clearGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  selectGood = (good: string) => {
    this.setState((prevState) => {
      if (prevState.selectedGoods.includes(good)) {
        const newSelectedGoods = prevState.selectedGoods
          .filter(item => item !== good);

        return {
          selectedGoods: newSelectedGoods,
        };
      }

      const newSelectedGoods = [
        ...prevState.selectedGoods,
        good,
      ];

      return {
        selectedGoods: newSelectedGoods,
      };
    });
  };

  render() {
    const { selectedGoods } = this.state;
    let title = '';

    switch (selectedGoods.length) {
      case 0:
        title = 'No goods selected';
        break;

      case 1:
        title = `${selectedGoods[0]} is selected`;
        break;

      case 2:
        title = `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
        break;

      default: {
        const goodsWithoutLast = selectedGoods.slice(0, -1).join(',');
        const lastGood = selectedGoods.slice(-1);

        title = `${goodsWithoutLast} and ${lastGood} are selected`;
        break;
      }
    }

    return (
      <div className="App">
        <h1 className="title">
          {title}
        </h1>
        {selectedGoods.length > 0
        && (
          <button
            type="submit"
            className="button button__clear"
            hidden={!selectedGoods}
            onClick={this.clearGoods}
          >
            Clear
          </button>
        )}
        <ul className="goods">
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={selectedGoods.includes(good)
                  ? 'good good__selected'
                  : 'good'}
              >
                {good}
                <button
                  type="submit"
                  className="button"
                  onClick={() => this.selectGood(good)}
                >
                  {selectedGoods.includes(good) ? 'Remove' : 'Select'}
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;